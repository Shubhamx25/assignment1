import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className="navbar">
        <ul>
            <li><Link to="/">Counter</Link></li>
            <li><Link to="/cards">User Cards</Link></li>
        </ul>
    </div>
  )
}

export default Nav