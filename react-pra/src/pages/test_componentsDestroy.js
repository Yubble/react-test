import { useState, useEffect } from 'react'

const ChildComp = () => {
    useEffect(() => {
        console.log('---- 运行子组件 ----')
        return () => {
            console.log('---- 子组件销毁 ----')
        };
    }, []);
    return (
        <div>
            <p>这里是加载进来的子组件</p>
        </div>
    )
}

export const TCompDestroy = () => {
    const [ showCom, setShowCom ] = useState(false)
    return (
        <div>
            <button
                onClick={
                    () => setShowCom(!showCom)
                }
            >控制组件显隐</button>
            <br/>
            当前加载组件为：
            {
                showCom ?
                <ChildComp/> :
                null
            }
        </div>
    )
}