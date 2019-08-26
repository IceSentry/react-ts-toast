export interface ToastData {
  id: number
  type: ToastType
  content: string
}

export type ToastType = 'success' | 'info' | 'warn' | 'error'