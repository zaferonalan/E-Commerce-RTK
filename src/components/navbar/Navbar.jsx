
import { IoSearch } from "react-icons/io5"
import "./Navbar.css"
import { MdOutlineShoppingCart } from "react-icons/md"

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <span className="navbar-language">ENG</span>
          <div className="navbar-searchContainer">
            <input type="text" placeholder="Search" className="navbar-input"/>
            <IoSearch className="icon"/>
          </div>
        </div>

        <div className="navbar-center">
          <h1 className="navbar-logo">Rise Of Coding <span>.</span></h1>
        </div>

        <div className="navbar-right">
          <div className="navbar-menuItem">Register</div>
          <div className="navbar-menuItem">Login</div>
          <div className="navbar-menuItem">
            <MdOutlineShoppingCart className="icon"/>
            <span className="cart-badge"></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar