/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-01-04 21:10:33
 */
import './App.css';
import robots from './mockData/robot.json'
import Robot from './components/Robot'

const html = "<img onerror='alert(\"Hacked!\")' src='invalid-image' />"
const jsHacked = "javascript: alert('Hacked');"
function App() {
  return (
    // react-jsx的规则，需要加<></>进行包裹
    <>
      <a href={jsHacked}>123</a>
      <ul>
        {robots.map(r => <Robot id={r.id} name={r.name} email={r.email} />)}
      </ul>
    </>
  );
}

export default App;
