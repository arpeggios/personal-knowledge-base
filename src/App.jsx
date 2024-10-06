// todo:
// style with mui
// add mui breadcrumbs
// add react syntax highlighter https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/ 

import { BrowserRouter as Router } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Main } from "./components/Main"
import "./App.css"

export function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Navbar />
        <Main />
      </Router>
    </div>
  )
}