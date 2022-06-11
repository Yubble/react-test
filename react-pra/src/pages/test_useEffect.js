/*
 * @Author: your name
 * @Date: 2022-04-08 17:01:21
 * @LastEditTime: 2022-05-19 21:11:32
 * @LastEditors: Yubble hailen91@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react-pra/react-test/react-pra/src/pages/test_useEffect.js
 */
import { useEffect, useState } from 'react'

export const TUseEffect = () => {
    const [ applyTxt, setApplyTxt ] = useState('初始文案')

    console.log('----- 这是进入组件 start ----')

    setTimeout(() => {
        setApplyTxt('更新为数据拉取后文案')
    }, 1000)

    // useEffect是异步运行
    useEffect(() => {
        console.log('~~~ 运行useEffect ~~~')
        // setTimeout(() => {
        //     setApplyTxt('更新为数据拉取后文案')
        // }, 3000)
    }, [applyTxt])

    console.log('------ 这是effect之后 end -----')
    return (
        <>
            {console.log('执行render')}
            <div>测试 useEffect</div>
            <p>
                测试用文案：
                <span> {applyTxt} </span>
            </p>
        </>
    )
}