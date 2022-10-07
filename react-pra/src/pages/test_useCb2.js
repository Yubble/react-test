import React, { useState, useCallback, memo } from 'react'

// const HYButton = (props) => {
//   console.log("HYButton重新渲染：" + props.title);
//   return <button onClick={props.increment}>HYButton +1</button>
// }
const HYButton = memo((props) => {
    console.log("HYButton重新渲染：" + props.title);
    return <button onClick={props.increment}>HYButton +1 - {props.title}</button>
})
export const TCallback2 = () => {
  console.log("CallbackHookDemo02重新渲染");
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const increment1 = () => {
    console.log("执行increment1函数");
    setCount(count + 1);
  }

  // 只有count发生变化后，increment2才会重新赋值
  const increment2 = useCallback(() => {
    console.log("执行increment2函数");
    setCount(count + 1);
  }, [count])
  return (
    <div>
      <h2>CallbackHookDemo01：{count}</h2>
      {/* <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+1</button> */}
      <HYButton title="btn1" increment={increment1} />
      {/* 这里的increment2从来没有更新过 */}
      <HYButton title="btn2" increment={increment2} />
      {
        /*
            为什么每次使用show切换时会重新渲染btn1而不渲染btn2，
            是因为memo会做将传入的参数做一个浅对比，如果传入的参数与之前没有差异，则子组件不会触发重新渲染，
            那么btn1没有将increment1使用useCallback保存，所以每次的function都是重新生成，也就导致传入子组件的方法每次都是最新的
        */
      }
      <button onClick={e => setShow(!show)}>show切换</button>
    </div>
  )
}