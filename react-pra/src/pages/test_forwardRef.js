import { useRef, useState, forwardRef, useImperativeHandle } from 'react'

// 通过forwardRef可以将父组件定义的ref传入到子组件，达到对子组件dom的控制
const MyInput = forwardRef((props, ref) => {
    const inpRef = useRef()

    const sonFn = () => {
        console.log('子组件独有方法')
    }
    /**
     * 从设计的角度上讲，不应该把子组件的dom全部暴露给父组件，如果想要对父组件的控制力做一个限制，
     * 则可以使用useImperativeHandle来包装一下，将只对父组件暴露的方法包装进来
     * */
    useImperativeHandle(ref, () => ({
        focus() { inpRef.current.focus() },
        blur() { inpRef.current.blur() },
        sonFn
    }))

    return (
        <div>
            <div>状态：{props.state ? "聚焦" : "失焦"}</div>
            <input ref={inpRef} type='text' />
        </div>
    )
})

export const TForwardRef = () => {
    const inputRef = useRef()
    // 控制焦距状态
    const [state, setState] = useState(false);

    function handleChange() {
        if (!state) {
            setState(true)
            inputRef.current.focus();
        } else {
            setState(false)
            inputRef.current.blur();
            inputRef.current.sonFn();
        }
    }

    return (
        <div style={{ testAlign: 'center' }}>
            <button style={{ margin: "20px" }} onClick={handleChange}>
                点击改变聚焦
            </button>
            {/* 如果想父组件来控制子组件dom，则必须传入一个ref类型变量，属性名也得命名为ref */}
            <MyInput ref={inputRef} state={state} />
        </div>
    )
}
