import * as React from 'react'
import { FC, createContext, useReducer, Dispatch } from 'react'
import { reducer, initialState, Action } from './reducer'
import { ToastData } from './types'

export const StateContext = createContext<ToastData[]>([])
export const DispatchContext = createContext<Dispatch<Action>>(() => [])

export const ReducerProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  )
}
