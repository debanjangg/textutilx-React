import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='/'>{props.aboutText}</a>
            </li>
          </ul>
        </div>
        <div className={`nav-item form-check form-switch text-${props.theme === 'light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleTheme} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.theme[0].toUpperCase() + props.theme.slice(1)} mode</label>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired,
    aboutLink: PropTypes.string,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: "Enter title",
    aboutText: "Enter about text"
}