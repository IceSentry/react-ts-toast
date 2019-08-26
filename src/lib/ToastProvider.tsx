import * as React from 'react'
import { FC } from 'react'
import { Toast } from './Toast'
import useToast from './useToast'
import { StyledProvider } from './ToastProvider.styles'
import { ReducerProvider } from './ReducerProvider'

const Toasts: FC = () => {
  const { toasts, onClose } = useToast()

  return (
    <>
      {toasts.map(toast => (
        <Toast key={toast.id} data={toast} onClose={onClose} />
      ))}
    </>
  )
}

export const ToastProvider: FC = ({ children }) => {
  return (
    <ReducerProvider>
      {children}
      <StyledProvider>
        <Toasts />
      </StyledProvider>
    </ReducerProvider>
  )
}
