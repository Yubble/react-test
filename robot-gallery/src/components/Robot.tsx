/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-01-04 21:29:55
 */
import React from 'react'
import style from './Robot.module.css'

interface RobotProps {
  id: Number,
  name: String,
  email: String
}

const Robot: React.FC<RobotProps> = ({id, name, email}) => {
  return (
    <div className={style.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Robot