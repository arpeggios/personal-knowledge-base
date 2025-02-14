import { Typography, Link, List, ListItem, Box } from "@mui/material";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";

const codeExample = `export function UseStatePage() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <>
      <button onClick={handleClick}>Clicked {count} times</button>
    </>
  )
}`;

const codeDoesNotWork1 = `function handleClick() {
  // setCount argument does not return a value
  setCount((count) => {count + 1})
}`;

const codeWorks1 = `function handleClick() {
  setCount((count) => {return count + 1})
}`;

const codeWorks2 = `function handleClick() {
  // Arrow functions that contain a simple expression and no curly braces around the body implicitly return the evaluated expression
  setCount((count) => count + 1)
}`;

const codeWorks3 = `function handleClick() {
  // The "count" argument is removed here. It is in the other examples beause the example page that comes with every Vite project uses it.
  setCount(() => count + 1)
}
`;

SyntaxHighlighter.registerLanguage("javascript", js);

export function UseStatePage() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <Box component="section">
        <Typography variant="h1">useState()</Typography>
        <Typography>
          The most common React Hook.{" "}
          <Link
            href="https://react.dev/learn/state-a-components-memory"
            target="_blank"
          >
            State is a component's memory
          </Link>
          . When state changes, the component and its children reload.
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h2">Uses</Typography>
        <Typography>
          Use when you want to change the data in a component and (optionally)
          show that change on the page. The component and its children will
          reload, but the page will not. If the page reloads, the data will be
          lost, unless you store it somewhere like a DB or local storage, and
          load it back into state.
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h2">Example</Typography>
        <button onClick={handleClick}>Clicked {count} times</button>
        <SyntaxHighlighter language="javascript" style={monokai} wrapLongLines>
          {codeExample}
        </SyntaxHighlighter>
      </Box>
      <Box component="section">
        <Typography variant="h2">Pitfalls</Typography>
        <List sx={{ listStyleType: "disc", pl: 2 }}>
          <ListItem sx={{ display: "list-item" }}>
            <Typography>
              setCount is a function that accepts a value or an expression
              (something that returns a value). You can't put a function
              definition in in setCount that doesn't return a value.
            </Typography>
            <Typography variant="h3">Doesn't work</Typography>
            <SyntaxHighlighter language="javascript" style={monokai}>
              {codeDoesNotWork1}
            </SyntaxHighlighter>
            <Typography variant="h3">Works</Typography>
            <SyntaxHighlighter
              language="javascript"
              style={monokai}
              wrapLongLines
            >
              {codeWorks1}
            </SyntaxHighlighter>
            <SyntaxHighlighter
              language="javascript"
              style={monokai}
              wrapLongLines
            >
              {codeWorks2}
            </SyntaxHighlighter>
            <SyntaxHighlighter
              language="javascript"
              style={monokai}
              wrapLongLines
            >
              {codeWorks3}
            </SyntaxHighlighter>
          </ListItem>
        </List>
      </Box>
      <Box component="section">
        <Typography variant="h2">Docs</Typography>
        <List>
          <ListItem disablePadding>
            <Typography>
              <Link
                href="https://react.dev/reference/react/useState"
                target="_blank"
              >
                Official API doc
              </Link>
            </Typography>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
