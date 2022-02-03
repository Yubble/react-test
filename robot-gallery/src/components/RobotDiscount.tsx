/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-01-04 21:29:55
 */
// 使用hooks提供的useContext可以完成全局上下文的传递
import React, { useContext } from 'react'
import style from './Robot.module.css'
import { appContext } from '../AppState'
import withAddToCart from './AddToCart'

export interface RobotProps {
  id: number;
  name: string;
  email: string;
  addToCart: (id, name) => void;
}

const RobotDiscount: React.FC<RobotProps> = ({id, name, email, addToCart}) => {
  const value = useContext(appContext)
  return (
    <div className={style.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="" />
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={() => addToCart(id, name)}>加入购物车</button>
    </div>
  )
}

export default withAddToCart(RobotDiscount)