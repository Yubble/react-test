import { useState, useMemo } from 'react'

export const TUseMemo = (props = {}) => {
    // 每一次的set都会触发组件的二次加载
    const [count, setCount] = useState(1)
    const [value, setValue] = useState(0)

    const expensive1 = () => {
        console.log('---- exp1 compute ----')
        let sum = 0
        for (let i=0; i<count * 10; i++) {
            sum += i
        }
        return sum
    }

    // useMemo会在内部先运行一下函数，保存它的返回值
    const expensive2 = useMemo(() => {
        console.log('---- exp2 compute ----')
        let sum = 0
        for (let i=0; i<count * 10; i++) {
            sum += i
        }
        return sum
    }, [count])

    return (
        <div>
            <h4>count:{count}-value:{value}-exp1:{expensive1()}-exp2:{expensive2}</h4>
            <span>此处的expensive计算其实只依赖count</span>
            <div>
                <button onClick={() => setCount(count + 1)}>点击按钮进行count + 1</button><br/>
                <input value={value} onChange={event => setValue(event.target.value)} />
            </div>
            <p>
                由此可见，没有被useMemo包裹的函数不论哪个state被set时都会触发运行，而被useMemo包裹的函数只有在依赖项变化时才会被二次触发
            </p>
            <hr />
        </div>
    )
}