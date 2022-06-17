import { createContext, useContext } from 'react'

const TestContext = createContext(null)

const GetCtxName = () => {
    const { name } = useContext(TestContext)
    return name
}

const Gril = () => {
    return (
        <div>
            我的名字叫：{ GetCtxName() }
        </div>
    )
}

const Father = () => {
    return (
        <div>
            爸爸的女儿：
            <Gril />
        </div>
    )
}

const Ancestry = () => {
    return (
        <div>
            祖宗告诉爸爸：
            <Father />
        </div>
    )
}

export const TuseContext = () => {
    return (
        <TestContext.Provider value={{ name: 'Luna' }}>
            <Ancestry />
        </TestContext.Provider>
    )
}