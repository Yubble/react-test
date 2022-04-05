import React, { useRef, useState, useEffect, useCallback, Component } from 'react'

// 用于记录Dom元素
const RefDom = () => {
    //创建ref
    const inputRef=useRef() 
    const getValue= () => {
        //访问ref
        console.log('当前输入框对象为：', inputRef.current)
        console.log('输入框的值为：', inputRef.current.value)
    }
    //挂载 
    return (
        <div>
            <input ref={inputRef} type="text" />
            {'\u00A0'}
            <button onClick={getValue}>获取input的值</button>
            <hr/>
        </div>
    )
}

// 用于获取子组件实例
class Children extends Component {
    constructor() {
        super()
        this.sum = 123
    }
    render() {
        const { count } = this.props
        return (
            <>
                <div> count is {count} </div>
                <div> sum is {this.sum} </div>
            </>
        )
    }
}

function GetChildComp () {
    const [ count, setCount ] = useState(0)
    const childrenRef = useRef(null)
    const addCount = () => {
        console.log('点击递增按钮')
        console.log('组件信息：', childrenRef.current)
        setCount(count => count + 1)
    }

    return (
        <div>
            点击次数：{ count }
            <Children ref={childrenRef} count={count}></Children>
            <button onClick={addCount}>点击递增</button>
            <hr />
        </div>
    )
}

// 用于记录全局变量
function RecordGlobal () {
    const [ count, setCount ] = useState(0)
    const timer = useRef(null)
    let timer2
    console.log('出发重复渲染')

    useEffect(() => {
        console.log('初始化一次')
        let id = setInterval(() => {
          setCount(count => count + 1)
        }, 500)
    
        timer.current = id
        timer2 = id
        // return () => {
        //     console.log('执行返回值')
        //     clearInterval(timer.current)
        // }
    }, [])

    // useCallback首先记录timer2，不会因为函数重复渲染而再次给timer2变量赋值，导致无法停止计时器
    const onClick = useCallback(() => {
        clearInterval(timer2)
    }, [])

    const onClickRef = useCallback(() => {
        clearInterval(timer.current)
    }, [])

    // const onClick = () => { clearInterval(timer2) }

    // const onClickRef = () => { clearInterval(timer.current) }

    return (
        <div>
          点击次数: { count }
          <button onClick={onClick}>普通</button>
          <button onClick={onClickRef}>useRef</button>
        </div>
    )
}

export const TUseRef = () => {
    return (
        <div>
            <h2>测试useRef</h2>
            <p>1、记录Dom元素</p>
            <RefDom />
            <p>2、映射子组件实例</p>
            <GetChildComp />
            <p>3、记录全局变量</p>
            <RecordGlobal />
        </div>
    )
}
