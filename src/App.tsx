import * as React from 'react'
import { ToastProvider } from 'lib/ToastProvider'
import useToast from 'lib/useToast'
import { useState, FC } from 'react'

const ExampleApp: FC = () => {
  const { addToast, clearAll } = useToast()
  const [text, setText] = useState('test')

  return (
    <>
      <input value={text} onChange={e => setText(e.currentTarget.value)} />
      <button onClick={() => addToast({ content: text })}>Add Toast</button>
      <button onClick={() => clearAll()}>Clear all</button>
    </>
  )
}

export const App = () => {
  return (
    <div className="App">
      <ToastProvider>
        <ExampleApp />
      </ToastProvider>
    </div>
  )
}
