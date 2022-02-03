/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-01-29 15:54:52
 */
import React, { useState } from "react";

interface AppStateValue {
  username: string;
  shoppingCart: {
    items: {
      id: number;
      name: string
    }[]
  };
}

const defaultContextValue: AppStateValue = {
  username: '亚博',
  shoppingCart: {
    items: []
  }
}

export const appContext = React.createContext(defaultContextValue)
export const appSetStateContext = React.createContext<
  React.Dispatch<React.SetStateAction<AppStateValue>> | undefined
>(undefined)

export const AppStateProvider: React.FC = (props) => {
  const [ state, setState ] = useState(defaultContextValue)
  return (
    <appContext.Provider value={state}>
      <appSetStateContext.Provider value={setState}>
        {props.children}
      </appSetStateContext.Provider>
    </appContext.Provider>
  )
}