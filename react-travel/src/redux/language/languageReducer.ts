/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-02-12 21:58:34
 */
import { changeLanguage } from "i18next"
import { CHANGE_LANGUAGE, ADD_LANGUAGE, LanguageActionTypes } from './languageActions'

export interface LanguageState {
  language: 'en' | 'zh',
  languageList: { name: string, code: string }[]
}

const defaultState:LanguageState = {
  language: 'zh',
  languageList: [
    {
      name: '中文',
      code: 'zh'
    },
    {
      name: 'English',
      code: 'en'
    }
  ]
}

export default (state = defaultState, action: LanguageActionTypes) => {
  switch(action.type) {
    case CHANGE_LANGUAGE:
      changeLanguage(action.payload)
      return { ...state, language: action.payload }
    case ADD_LANGUAGE:
      return {
        ...state,
        languageList: [...state.languageList, action.payload]
      }
    default: return state
  }
}
