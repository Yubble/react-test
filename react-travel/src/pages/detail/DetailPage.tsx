/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-02-08 20:30:03
 */
import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const DetailPage : React.FC = () => {
  const [ searchParams ] = useSearchParams()
  const id = searchParams.get('id')
  return (
    <h1>旅游路线详情页面，路线ID:{id}</h1>
  )
  // return (
  //   <h1>旅游路线详情页面，路线ID</h1>
  // )
}