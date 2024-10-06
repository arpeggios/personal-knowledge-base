import { Link } from "react-router-dom";

const css = `
  nav {
    display: flex;
    justify-content: space-between;
  }

  .nav-link a {
    margin-right: 10px;
  }
`

export function Navbar() {
  return (
    <>
      <style>{css}</style>
      <nav>
        <div>
          PKB
        </div>
        <div className="nav-link">
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
        </div>
      </nav>
    </>
  )
}