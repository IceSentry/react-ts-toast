import { useCallback, useContext } from 'react'
import { StateContext, DispatchContext } from './ReducerProvider'
import { actions } from './reducer'
import { ToastData, ToastType } from './types'

const useToast = () => {
  const toasts = useContext(StateContext)
  const dispatch = useContext(DispatchContext)

  const addToast = useCallback(
    ({ content, type = 'info' }: { content: string; type?: ToastType }) => {
      dispatch(actions.addToast({ type, content }))
    },
    [dispatch]
  )

  const clearAll = useCallback(() => {
    dispatch({ type: 'clear' })
  }, [dispatch])

  const onClose = useCallback(
    (data: ToastData) => {
      dispatch(actions.removeToast(data.id))
    },
    [dispatch]
  )

  return { toasts, addToast, onClose, clearAll }
}

export default useToast
