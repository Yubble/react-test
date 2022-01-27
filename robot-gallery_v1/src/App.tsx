/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-01-04 21:10:33
 */
import Robot from './components/Robot'
// 将样式以对象的方式加载进来，避免全局污染
import style from './App.module.css'
import logo from './assets/images/logo.svg'
import ShoppingCart from './components/ShoppingCart'
import { Component } from 'react'

// const html = "<img onerror='alert(\"Hacked!\")' src='invalid-image' />"
// const jsHacked = "javascript: alert('Hacked');"
interface Props {}

interface State {
  robotGallery: any[],
  count: number
}

class App extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      robotGallery: [],
      count: 0
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => this.setState({ robotGallery: data }))
  }

  render() {
    return (
      // react-jsx的规则，如果两个标签同级，需要加<></>进行包裹
      <div className={style.app}>
        <div className={style.appHeader}>
          <img className={style.appLogo} src={logo} alt="" />
          <h1>罗伯特牛皮机器人商店</h1>
        </div>
        <button
          onClick={() => {
            // 如果想要同时在一个函数中处理state中的值，需要使用preState来赋值
            this.setState((preState, preProps) => {
              return { count: preState.count + 1 }
            }, () => {
              console.log('count is ', this.state.count)
            })
            this.setState((preState, preProps) => {
              return { count: preState.count + 1 }
            }, () => {
              console.log('count is ', this.state.count)
            })
          }}
        >
          click me
        </button>
        count is {this.state.count}
        <ShoppingCart />
        {/* <a href={jsHacked}>123</a> */}
        <ul className={style.robotList}>
          {this.state.robotGallery.map(r => <Robot id={r.id} name={r.name} email={r.email} />)}
        </ul>
      </div>
    );   
  }
}

export default App;
