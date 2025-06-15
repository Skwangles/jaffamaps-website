import React from 'react'
import logo from './assets/logo.svg'

const Header = React.forwardRef<HTMLElement, {}>((_props, ref) => (
  <section className="navseego-header fade-section" ref={ref as React.RefObject<HTMLElement>}>
    <div className="navseego-title-row">
      <img src={logo} alt="Navseego logo" className="navseego-logo" />
      <h1 className="navseego-title">Navseego</h1>
    </div>
    <p className="navseego-subtitle">Large-scale Low-cost Panoramic Virtual Tours</p>
  </section>
))

export default Header; 