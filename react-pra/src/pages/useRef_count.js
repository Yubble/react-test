/*
 * @Author: your name
 * @Date: 2022-04-07 20:19:12
 * @LastEditTime: 2022-04-07 21:25:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react-pra/react-test/react-pra/src/pages/useRef_count.js
 */

import { useRef, useEffect } from 'react'

export const TRefCount = () => {
    let count = useRef(0)

    useEffect(() => {
        setTimeout(() => {
            console.log('当前 count 为', count)
        }, 5000)
    }, [])

    const addCount = () => {
        console.log('执行增加方法')
        count.current += 1
    }

    return (
        <div>
            <h2>使用useRef记录全局数据</h2>
            {/* ref 的值无法用在页面渲染上，它做不到实时更新 */}
            <p>当前 count is ${count.current}</p>
            <button onClick={addCount} > 计数增加一个 </button>
        </div>
    )
}
