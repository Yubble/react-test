/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-01-04 21:10:33
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import robots from './mockData/robot.json'
import Robot from './components/Robot'

function App() {
  return (
    <ul>
      {robots.map(r => <Robot id={r.id} name={r.name} email={r.email} />)}
    </ul>
  );
}

export default App;
