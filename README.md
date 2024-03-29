# react-ts-toast

This is a simple react toast notifications library made with typescript.

To use it, wrap your App in a `<ToastProvider>`.

The `useToast()` hook gives `addToast()` and `clearAll()` functions.

## Example usage:

```tsx
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
```
