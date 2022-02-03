/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-01-29 17:21:59
 */
import React, { useContext } from 'react'
import { appSetStateContext } from '../AppState'
import { RobotProps } from './RobotDiscount'

const withAddToCart = (ChildComponent: React.ComponentType<RobotProps>) => {
  return (props) => {
    const setState = useContext(appSetStateContext)
    const addToCart = (id, name) => {
      if (setState) {
        setState(state => {
          return {
            ...state,
            shoppingCart: {
              items: [...state.shoppingCart.items, {id, name}]
            }
          }
        })
      }
    }
    return <ChildComponent {...props} addToCart={addToCart} />
  }
}

export default withAddToCart

export const useAddToCart = () => {
  const setState = useContext(appSetStateContext)
  const addToCart = (id, name) => {
    if (setState) {
      setState(state => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, {id, name}]
          }
        }
      })
    }
  }

  return addToCart
}
