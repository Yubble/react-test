import { useState, useEffect, useCallback } from 'react'

const Child = ({ callback }) => {
    console.log('--- 重新绘制child ---')
    const [count, setCount] = useState(() => callback())
    // 当使用useCallback之后，能够监听传入的callback函数是否有变化而重新给自己的state赋值
    // 如果现在触发的时父组件的value值，则不会触发下面的监听函数
    useEffect(() => {
        console.log('------ callback 变化了 -----')
        setCount(callback())
    }, [callback])
    return (
        <div>子组件中 count is {count}</div>
    )
}

const set = new Set()

export const TUseCallback = () => {
    console.log('---- 父组件重绘 ----')
    const [count, setCount] = useState(1)
    const [value, setValue] = useState('')

    // useCallback不会自动运行回调函数，而是将函数保存返回出来
    const callback = useCallback(() => {
        console.log('callback 执行')
        return count
    }, [count])

    // 如果不用useCallback包裹，每次都会再新生成一个callback函数
    // const callback = () => {
    //     console.log('callback 执行')
    //     return count
    // }

    set.add(callback)

    return (
        <div>
            <h4>count: {count}</h4>
            <h4>set size: {set.size}</h4>
            <div>
                <button onClick={() => setCount(count + 1)}>count + 1</button>
                <br/>
                <input value={value} onChange={e => setValue(e.target.value)} />
                <Child callback={callback} />
            </div>
        </div>
    )
}
