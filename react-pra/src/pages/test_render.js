import React, { useRef, useState } from 'react'

const FunSub = ({globalCount}) => {
    const globalCountRef = useRef(globalCount)
    const [ data, setData ] = useState(0)

    const increment = () => {
        setData(data+1)
    }

    return (
        <div>
            <p>函数组件：</p>
            <button onClick={increment}>点击按钮加一</button><br/>
            <p>
                当前数字为{data}
            </p>
            <p>
                全局计数为{globalCount}
            </p>
            <p>
                {/* 不会因为上游props改变而改变，ref只记录第一次函数渲染时的数据 */}
                局部记录全局计数为{globalCountRef.current}
            </p>
        </div>
    )
}

class ClassSub extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: 0
        }
        // 不会随着父组件globalCount改变而改变
        console.log('---- 类组件中 globalCount is ----', props.globalCount)
    }

    increment = () => {
        this.setState({
            data: this.state.data+1
        })
    }

    render() {
        // 会跟随父组件global改变而改变，render渲染时机是会随着父级props的变化而再次渲染的
        console.log('---- 类组件 render 时 globalCount is ----', this.props.globalCount)
        return(
            <div>
                <p>类组件：</p>
                <button onClick={this.increment}>
                    点击按钮加一
                </button>
                <br/>
                <p>
                    当前数字为{this.state.data}
                </p>
                <p>
                    全局计数为{this.props.globalCount}
                </p>
            </div>
        )
    }
}

// 父级组件
const SupCom = ({
    children
}) => {
    const [supCount, setSupCount] = useState(3)

    return (
        <div>
            <h2>这里是父级组件</h2>
            <button onClick={() => { setSupCount(supCount + 2) }}>点击后全局count发生改变</button>
            <p>当前全局计数为：{supCount}</p>
            <hr />
            {/* 此处注意，children并不是单纯的数组，如果需要遍历的话要使用React提供的api来遍历 */}
            {React.Children.map(children, child => {
                return React.cloneElement(child, {
                    globalCount: supCount,
                });
            })}
        </div>
    )
}

export const TRender = () => {
    return (
        <>
            <SupCom>
                <FunSub></FunSub>
                <hr />
                <ClassSub></ClassSub>
            </SupCom>
        </>
    )
}