import { useReducer } from 'react'

const baseInitalState = { count: 0, principal: 'halo' }
const baseReducer = (state, action) => {
    switch (action.type) {
        case 'increment': return { ...state, count: state.count + action.addCount }
        case 'decrement':
            const final = state.count - action.subCount
            return {
                ...state,
                count: final <= 0 ? 0 : final
            }
        case 'reset':
            return baseInitalState
    }
}

const Example1 = () => {
    /*—————————— 简单方法，数值累加 ——————————*/
    const [state, dispatch] = useReducer(baseReducer, baseInitalState)
    return (
        <>
            <h2>数值累加</h2>
            { JSON.stringify(state) }
            <div>
                <button onClick={() => { dispatch({type: 'increment', addCount: 3 }) }}>总数增加3</button>
                <button onClick={() => { dispatch({type: 'decrement', subCount: 2 }) }}>总数减去2</button>
                <button onClick={() => { dispatch({type: 'reset'}) }}>数据重置</button>
            </div>
            <hr/>
        </>
    )
}

const Example2 = () => {
    /*—————————— 测试多个reducer ——————————*/
    // 实例2：两部分状态操作共用同一reducer与initalState，不过需生成两套数据读取与操作
    const [exa1State, exa1Dispatch] = useReducer(baseReducer, baseInitalState)
    const [exa2State, exa2Dispatch] = useReducer(baseReducer, baseInitalState)

    const ButtonGroup = ({ dispatch }) => {
        return (
            <div>
                <button onClick={() => { dispatch({type: 'increment', addCount: 1 }) }}>总数增加1</button>
                <button onClick={() => { dispatch({type: 'decrement', subCount: 2 }) }}>总数减去2</button>
                <button onClick={() => { dispatch({type: 'reset'}) }}>数据重置</button>
            </div>
        )
    }

    return (
        <>
            <h2>使用reducer实例1</h2>
            { JSON.stringify(exa1State) }
            <ButtonGroup dispatch={exa1Dispatch} />
            <h2>使用reducer实例2</h2>
            { JSON.stringify(exa2State) }
            <ButtonGroup dispatch={exa2Dispatch} />
            <hr />
        </>
    )
    // 结论：虽然使用的是相同的基础状态模板，操作方法，但是由于是用useReducer生成了两套不同的状态读取与操作实例，所以互不干扰，信息隔离。
}

export const TuseReducer = () => {
    return (
        <>
            <Example1/>
            <Example2/>
        </>
    )
}