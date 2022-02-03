/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-01-04 21:10:33
 */
import React, { useState, useEffect } from 'react'
import RobotDiscount from './components/RobotDiscount'
import Robot from './components/Robot'
// 将样式以对象的方式加载进来，避免全局污染
import style from './App.module.css'
import logo from './assets/images/logo.svg'
import ShoppingCart from './components/ShoppingCart'

// const html = "<img onerror='alert(\"Hacked!\")' src='invalid-image' />"
// const jsHacked = "javascript: alert('Hacked');"
interface Props {
  username: string
}

interface State {
  robotGallery: any[],
  count: number
}

const App:React.FC = (props) => {

  const [ count, setCount ] = useState<number>(0)
  const [ robotGallery, setRobotGallery ] = useState<any>([])
  const [ loading, setLoading ] = useState<boolean>(false)
  const [ error, setError ] = useState<string>()

  // 只会监听count变量，count发生改变后，才会触发回调
  useEffect(() => {
    document.title = `点击${count}次`
  }, [count])

  // 组件加载时便会触发，如果第二个参数不填的话，每次页面渲染都会触发回调
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        setRobotGallery(data)
      } catch (e: any) {
        setError(e.message)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    // react-jsx的规则，如果两个标签同级，需要加<></>进行包裹
    <div className={style.app}>
      <div className={style.appHeader}>
        <img className={style.appLogo} src={logo} alt="" />
        <h1>罗伯特牛皮机器人商店</h1>
      </div>
      <button
        onClick={() => {
          setCount(count+1)
        }}
      >
        click me
      </button>
      count is {count}
      <ShoppingCart />
      {(!error || error != '') && <div>网站出错：{error}</div>}
      {!loading ? (
        <ul className={style.robotList}>
          {robotGallery.map((r, index) => 
            index % 2 == 0 ?
              ( <RobotDiscount id={r.id} name={r.name} email={r.email} /> )
            :
              ( <Robot id={r.id} name={r.name} email={r.email} /> )
          )}
        </ul>
      ) : (
        <h2>loading ...</h2>
      )}
    </div>
  )
}

export default App;
