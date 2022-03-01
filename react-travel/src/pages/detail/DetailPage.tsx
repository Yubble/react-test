/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-02-08 20:30:03
 */
import React from 'react'
import { useSearchParams, useParams } from 'react-router-dom'

export const DetailPage : React.FC = () => {
  // url标准参数
  const [ searchParams ] = useSearchParams()
  const id = searchParams.get('id')
  // ：id类参数获取
  const { touristRouteId } = useParams()
  return (
    <h1>旅游路线详情页面，路线ID:{touristRouteId}</h1>
  )
  // return (
  //   <h1>旅游路线详情页面，路线ID</h1>
  // )
}