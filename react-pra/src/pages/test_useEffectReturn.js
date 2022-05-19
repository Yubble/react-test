/*
 * @Author: Yubble hailen91@qq.com
 * @Date: 2022-05-19 21:01:50
 * @LastEditors: Yubble hailen91@qq.com
 * @LastEditTime: 2022-05-19 21:22:19
 * @FilePath: /react-test/react-pra/src/pages/test_useEffectReturn.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect, useState } from 'react'

export const TUseEffectReturn = () => {
    const [ rName, setRName ] = useState('王肉喵')

    useEffect(() => {
        // 此处输出的rName是setRName变化之前的值
        console.log('执行了 useEffect，rName is ', rName)
        return () => {
            // 此处输出的则是setRName变化之后的值，清除了rName上一个值
            console.log('--- 清除结点 rName ---', rName)
        }
    }, [rName])

    return (
        <div>
            <p>
                rName is {rName}
            </p>
            <button
                onClick={() => setRName('王大肉')}
            >
                点击修改文案：王大肉
            </button>
            <br/>
            <button
                onClick={() => setRName('王肉胖')}
            >
                点击修改文案：王肉胖
            </button>
        </div>
    )
}