import styled from 'styled-components'
import { ToastData } from 'lib/types'

interface StyleData {
  color: string
  bgColor: string
  iconBgColor: string
}

export const StyledToast = styled.div<{ color: string; bgColor: string }>`
  display: grid;
  grid-template-columns: 30px auto 1.5em;
  height: 62px;
  width: 360px;
  margin: 4px;
  margin-bottom: 8px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  color: ${({ color }) => color};
  background: ${({ bgColor }) => bgColor};
`

export const IconArea = styled.div<{ bgColor: string; color: string }>`
  color: ${({ color }) => color};
  background: ${({ bgColor }) => bgColor};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
`

export const ContentArea = styled.div`
  text-align: left;
  padding: 8px 12px;
  overflow-y: auto;
  word-wrap: break-word;
`

export const CloseButtonArea = styled.div``

export const CloseButton = styled.div`
  cursor: pointer;
  margin: 4px;
  text-align: center;
`

export const getToastStyle = (data: ToastData): StyleData => {
  switch (data.type) {
    case 'error':
      return {
        color: 'rgb(191, 38, 0)',
        bgColor: 'rgb(255, 235, 230)',
        iconBgColor: 'rgb(255, 86, 48)'
      }
    case 'info':
      return {
        color: 'rgb(80, 95, 121)',
        bgColor: 'white',
        iconBgColor: 'blue'
      }

    case 'success':
      return {
        color: 'rgb(0, 102, 68)',
        bgColor: 'rgb(227, 252, 239)',
        iconBgColor: 'rgb(54, 179, 126)'
      }
    case 'warn':
      return {
        color: 'rgb(255, 139, 0)',
        bgColor: 'rgb(255, 250, 230)',
        iconBgColor: 'rgb(255, 171, 0)'
      }
  }
}
