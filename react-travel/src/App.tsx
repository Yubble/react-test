/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-02-04 02:18:57
 */
import React from 'react';
import style from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, RegisterPage, SignInPage, DetailPage } from './pages'

function App() {
  return (
    <div className={style.App}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signIn' element={<SignInPage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/detail/:touristRouteId' element={<DetailPage />}></Route>
          <Route path='/*' element={<h1>404 not Found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
