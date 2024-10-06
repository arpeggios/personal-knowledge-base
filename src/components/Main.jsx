import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { React } from "../pages/React"
import { UseState } from "../pages/UseState"
import { JavaScript } from "../pages/JavaScript"
import { Destructuring } from "../pages/Destructuring"

export function Main() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="javascript" element={<JavaScript />} />
          <Route path="/javascript/destructuring" element={<Destructuring />} />
          <Route path="/react" element={<React />} />
          <Route path="/react/useState" element={<UseState />} />
        </Routes>
      </main>
    </>
  )
}