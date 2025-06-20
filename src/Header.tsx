import React from 'react'
import logo from './assets/logo.svg'

const Header = React.forwardRef<HTMLElement, {}>((_props, ref) => (
  <section
    className="campusvirtual-header fade-section"
    ref={ref as React.RefObject<HTMLElement>}
  >
    <div className="campusvirtual-title-row">
      <img src={logo} alt="CampusVirtual logo" className="campusvirtual-logo" />
      <h1 className="campusvirtual-title">CampusVirtual</h1>
    </div>
    <p className="campusvirtual-subtitle">
      Large-scale Low-cost Panoramic Virtual Tours
    </p>
  </section>
))

export default Header
