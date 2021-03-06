import React from 'react'
import { Link } from 'gatsby'
import phone from '../img/phone-square-solid.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Pakendamine" style={{ width: '208px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/kasikiled">
                Käsikiled
              </Link>
              <Link className="navbar-item" to="/masinkiled">
                Masinkiled
              </Link>
              <Link className="navbar-item" to="/products">
                Tooted
              </Link>
              <Link className="navbar-item" to="/kontakt">
                Kontakt
              </Link>
              <Link className="navbar-item" to="/paring">
                Hinnapäring
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="tel:+37253484700"
              >
                <span className="icon">
                  <img src={phone} alt="Telefon" />
                </span>
                <span>+372 53 48 4700</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
