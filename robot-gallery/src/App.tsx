/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-01-04 21:10:33
 */
// import './App.css';
import robots from './mockData/robot.json'
import Robot from './components/Robot'
// 将样式以对象的方式加载进来，避免全局污染
import style from './App.module.css'
import logo from './assets/images/logo.svg'

// const html = "<img onerror='alert(\"Hacked!\")' src='invalid-image' />"
// const jsHacked = "javascript: alert('Hacked');"
function App() {
  return (
    // react-jsx的规则，如果两个标签同级，需要加<></>进行包裹
    <div className={style.app}>
      <div className={style.appHeader}>
        <img className={style.appLogo} src={logo} alt="" />
        <h1>罗伯特牛皮机器人商店</h1>
      </div>
      {/* <a href={jsHacked}>123</a> */}
      <ul className={style.robotList}>
        {robots.map(r => <Robot id={r.id} name={r.name} email={r.email} />)}
      </ul>
    </div>
  );
}

export default App;
