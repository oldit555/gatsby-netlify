import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import telegram from "../img/social/telegram.svg";
import youtube from "../img/social/youtube.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
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
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: "35px" }} />
              <div className="logoText">DED INVEST</div>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
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
              <Link className="navbar-item" to="/blog">
                Все посты
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">

                </span>
              </a>
              <a title="telegram" className="navbar-item" href="https://t.me/olegdi" target="_blank" rel="noreferrer">
                  <img
                    src={telegram}
                    alt="Telegram"
                    style={{ width: "2em", height: "2em" }}
                  />
                </a>
                <a title="youtube" className="navbar-item" href="https://www.youtube.com/channel/UCsG4d7tL554tAJLO9viHmJA" target="_blank" rel="noreferrer">
                  <img
                    src={youtube}
                    alt="Youtube"
                    style={{ width: "2em", height: "2em" }}
                  />
                </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
