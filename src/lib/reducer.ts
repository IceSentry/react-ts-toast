import { ToastData, ToastType } from './types'

type State = ToastData[]

export type Action =
  | { type: 'addToast'; payload: { type: ToastType; content: string } }
  | { type: 'removeToast'; payload: number }
  | { type: 'clear' }

let id = 0

export const initialState: State = [
  {
    id: id++,
    type: 'error',
    content: 'ROS: Failed to connect to: http://localhost:9090/ '
  },
  {
    id: id++,
    type: 'success',
    content: 'ROS: Connected to: http://localhost:9090/'
  },
  {
    id: id++,
    type: 'warn',
    content: 'Gamepads not supported in this browser'
  },
  {
    id: id++,
    type: 'info',
    content: 'Hello world!'
  }
]

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'addToast':
      const {
        payload: { type, content }
      } = action
      return [
        ...state,
        {
          id: id++,
          type: type,
          content: content
        }
      ]
    case 'removeToast':
      const { payload } = action
      const newState = [...state]
      newState.splice(newState.findIndex(toast => toast.id === payload), 1)
      return newState
    case 'clear':
      return []
    default:
      return state
  }
}

export const actions = {
  addToast: (toast: { type: ToastType; content: string }): Action => ({
    type: 'addToast',
    payload: toast
  }),
  removeToast: (id: number): Action => ({
    type: 'removeToast',
    payload: id
  })
}
