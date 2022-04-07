import React, { useState, useCallback, memo } from 'react'

// const HYButton = memo((props: any) => {
//     console.log('HYButton 重新渲染：' + props.title)
//     return <button onClick={props.increment}>HYButton + 1</button>
// })

const HYButton = (props: any) => {
    console.log('HYButton 重新渲染：' + props.title)
    // return <button onClick={props.increment}>HYButton + 1</button>
    return (
        <div>
            title: {props.title}
        </div>
    )
}

// const HYButton = memo((props: any) => {
//     console.log('HYButton 重新渲染：' + props.title)
//     // return <button onClick={props.increment}>HYButton + 1</button>
//     return (
//         <div>
//             title: {props.title}
//         </div>
//     )
// })

export const CallbackHookDemo = function () {
    console.log('callbackhook重新渲染')
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(true)
    const increment1 = () => {
        console.log('执行increment1函数')
        setCount(count + 1)
    }
    // const increment2 = useCallback(() => {
    //     console.log('执行increment2函数')
    //     setCount(count + 1)
    // }, [count])
    const increment2 = () => {
        console.log('执行increment2函数')
        setCount(count + 1)
    }

    return (
        <div>
            <h2>CallbackHookDemo1: {count}</h2>
            <button onClick={increment2}> +1 </button>
            {/* <HYButton title="btn1" increment={increment1}></HYButton>
            <HYButton title="btn2" increment={increment2}></HYButton> */}
            <HYButton title="btn1"></HYButton>
            <HYButton title="btn2"></HYButton>
            <button onClick={e => setShow(!show)}>show切换</button>
        </div>
    )
}