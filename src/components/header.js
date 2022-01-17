import * as React from "react"
import Menu from "../images/menu.svg"
import { Timeline, Tween } from "react-gsap"
// import PropTypes from "prop-types"
// import { Link } from "gatsby"

function Header() {
  // useLayoutEffect(() => {
  //   navAnim(".nav")
  // })
  return (
    <header>
      <nav>
        <Tween
          from={{ y: -200, opacity: 0 }}
          to={{ y: 0, opacity: 1 }}
          stagger={0.25}
          delay={3}
        >
          <h1 className="nav">
            COR
            <span>e</span>
          </h1>
          <div className="menu">
            {/* <Tween
              from={{ y: -100, opacity: 0 }}
              to={{ y: 0, opacity: 1 }}
              stagger={0.1}
            > */}
            <img className="nav" src={Menu} alt="menu_icon" />
            <p className="nav">find your fit</p>
            {/* </Tween> */}
          </div>
          <div>
            <a className="nav" href="/">
              account
            </a>
            <a className="nav" href="/">
              cart (0)
            </a>
          </div>
        </Tween>
      </nav>
    </header>
  )
}

export default Header
