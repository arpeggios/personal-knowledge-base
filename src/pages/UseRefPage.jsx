import { Box, Link, Typography, List, ListItem } from "@mui/material";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeExample = `[codeExample]`;

export function UseRefPage() {
  return (
    <>
      <Box component="section">
        <Typography variant="h1">useRef()</Typography>
        <Typography>
          [useRef is a Hook that returns a mutable object whose .current
          property is initialized to the passed argument (initialValue). The
          returned object will persist for the full lifetime of the component.]
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h2">Uses</Typography>
        <Typography>Use when you want to</Typography>
        <List sx={{ listStyleType: "disc", pl: 2 }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography>
              update a value without re-rendering the component
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography>access a DOM element directly</Typography>
          </ListItem>
        </List>
      </Box>
      <Box component="section">
        <Typography variant="h2">Example</Typography>
        <SyntaxHighlighter language="javascript" style={monokai} wrapLongLines>
          {codeExample}
        </SyntaxHighlighter>
      </Box>
      <Box component="section">
        <Typography variant="h2">Pitfalls</Typography>
        <Typography>
          Changing a ref does not re-render a component. use state if you want
          to do that.
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h2">Docs</Typography>
        <List>
          <ListItem disablePadding>
            <Link
              href="https://react.dev/reference/react/useRef"
              target="_blank"
            >
              <Typography>Official API doc</Typography>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link
              href="https://react.dev/learn/referencing-values-with-refs"
              target="_blank"
            >
              <Typography>Referencing Values with Refs</Typography>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link
              href="https://react.dev/learn/manipulating-the-dom-with-refs"
              target="_blank"
            >
              <Typography>Manipulating the DOM with Refs</Typography>
            </Link>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
