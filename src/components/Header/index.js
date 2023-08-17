// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="website-logo-img-size"
    />
    <nav className="nav-container">
      <ul className="nav-options-container">
        <Link to="/">
          <li className="nav-options">Home</li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            className="nav-option-img-sm"
            alt="nav home"
          />
        </Link>
        <Link to="/product">
          <li className="nav-options">Product</li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            className="nav-option-img-sm"
            alt="nav products"
          />
        </Link>
        <Link to="/cart">
          <li className="nav-options">cart</li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
            className="nav-option-img-sm"
            alt="nav cart"
          />
        </Link>
      </ul>
    </nav>
    <button type="button" className="button">
      Logout
    </button>
    <button type="button" className="logout-button-for-sm">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="logout-image"
      />
    </button>
  </div>
)

export default Header
