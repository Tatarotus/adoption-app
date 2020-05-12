import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.jpg"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <nav className="navbar has-background-dark">
          <div className="navbar-brand">
            <Link className="navbar-item has-text-light" to="/">
              <img src={logo} alt="Animal Lovers Logo" />

              {siteTitle}
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <Link to="/add-pet" className="button is-success add-pet">
                <strong>Adicionar Pet!</strong>
              </Link>
            </div>
          </div>
        </nav>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
