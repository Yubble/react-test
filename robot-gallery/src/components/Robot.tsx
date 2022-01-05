/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-01-04 21:29:55
 */
import React from 'react'

interface RobotProps {
  id: Number,
  name: String,
  email: String
}

const Robot: React.FC<RobotProps> = ({id, name, email}) => {
  return (
    <li>
      <img src={`https://robohash.org/${id}`} alt="" />
      <h2>{name}</h2>
      <p>{email}</p>
    </li>
  )
}

export default Robot