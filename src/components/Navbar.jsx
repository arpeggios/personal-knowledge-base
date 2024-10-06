import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">PKB</Link></li>
          <li><Link to="/javascript">JavaScript</Link></li>
          <li><Link to="react">React</Link></li>
        </ul>
      </nav>
    </>
  )
}