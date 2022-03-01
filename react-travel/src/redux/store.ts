/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-02-12 21:55:45
 */
import { createStore } from 'redux'
import languageReducer from './language/languageReducer'

const store = createStore(languageReducer)

export default store
