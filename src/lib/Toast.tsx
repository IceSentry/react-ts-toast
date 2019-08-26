import * as React from 'react'
import { FC, useCallback } from 'react'
import {
  getToastStyle,
  StyledToast,
  IconArea,
  ContentArea,
  CloseButtonArea,
  CloseButton
} from 'lib/Toast.styles'

import {
  MdInfoOutline,
  MdDone,
  MdWarning,
  MdErrorOutline
} from 'react-icons/md'
import { ToastData, ToastType } from 'lib/types'

const Icon: FC<{ type: ToastType }> = ({ type }) => {
  const size = 18
  switch (type) {
    case 'error':
      return <MdErrorOutline size={size} />
    case 'info':
      return <MdInfoOutline size={size} />
    case 'success':
      return <MdDone size={size} />
    case 'warn':
      return <MdWarning size={size} />
  }
}

interface Props {
  data: ToastData
  onClose: (data: ToastData) => void
}

export const Toast: FC<Props> = ({ data, onClose }) => {
  const removeToast = useCallback(() => {
    onClose(data)
  }, [data, onClose])

  const style = getToastStyle(data)

  return (
    <StyledToast color={style.color} bgColor={style.bgColor}>
      <IconArea bgColor={style.iconBgColor} color={style.bgColor}>
        <Icon type={data.type} />
      </IconArea>
      <ContentArea>{data.content}</ContentArea>
      <CloseButtonArea>
        <CloseButton onClick={removeToast}>X</CloseButton>
      </CloseButtonArea>
    </StyledToast>
  )
}
