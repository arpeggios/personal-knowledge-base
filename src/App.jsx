// todo:
// add mui breadcrumbs
// add react syntax highlighter https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/ 

import { BrowserRouter as Router } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { MainContent } from "./components/MainContent"
import { Box } from "@mui/material"
import "./App.css"

export function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Router>
        <Navbar />
        <MainContent />
      </Router>
    </Box>
  )
}