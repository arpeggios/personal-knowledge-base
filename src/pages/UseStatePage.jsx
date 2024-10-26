import { Typography, Link } from "@mui/material"
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
// import { monokai } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import {useState} from 'react'

const codeSample = `export function UseStatePage() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <>
      <button onClick={handleClick}>Clicked {count} times</button>
    </>
  )
}`

SyntaxHighlighter.registerLanguage('javascript', js)

export function UseStatePage() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <>
      <Typography variant="h1">useState()</Typography>
      <Typography><Link href="https://react.dev/reference/react/useState" target='_blank'>Official doc</Link></Typography>
      <Typography>The most common React Hook. State is data that can change. When state changes, the component and its children reload.</Typography>
      <Typography variant="h2">Example</Typography>
      <button onClick={handleClick}>Clicked {count} times</button>
      <SyntaxHighlighter language="javascript" style={monokai} wrapLongLines>{codeSample}</SyntaxHighlighter>
    </>
  )
}