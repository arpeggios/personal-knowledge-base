import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { React } from "../pages/React"
import { UseStatePage } from "../pages/UseStatePage"
import { HTML } from '../pages/HTML'
import { CSS } from "../pages/CSS"
import { JavaScript } from "../pages/JavaScript"
import { Destructuring } from "../pages/Destructuring"
import { Box } from "@mui/material"

export function MainContent() {
  return (
    <Box component="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<HTML />} />
        <Route path='/css' element={<CSS />} />
        <Route path="/javascript" element={<JavaScript />} />
        <Route path="/javascript/destructuring" element={<Destructuring />} />
        <Route path="/react" element={<React />} />
        <Route path="/react/useStatePage" element={<UseStatePage />} />
      </Routes>
    </Box>
  )
}