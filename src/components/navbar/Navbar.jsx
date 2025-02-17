
import { IoSearch } from "react-icons/io5"
import "./Navbar.css"
import { MdOutlineShoppingCart } from "react-icons/md"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Navbar = () => {

  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalItems = cartItems.length

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

        <Link to="/">
          <div className="navbar-center">
            <h1 className="navbar-logo">Rise Of Coding <span>.</span></h1>
          </div>
        </Link>

        <div className="navbar-right">
          <Link to="/auth/register">
            <div className="navbar-menuItem">Register</div>
          </Link>
          <Link to="/auth/login">
            <div className="navbar-menuItem">Login</div>
          </Link>
          <Link to="/cart">
            <div className="navbar-menuItem">
              <MdOutlineShoppingCart className="icon"/>
              { totalItems > 0 && 
                <span className="cart-badge">{totalItems}</span>
              }
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar