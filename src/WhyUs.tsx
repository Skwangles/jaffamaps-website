import React from 'react'

const WhyUs = React.forwardRef<HTMLElement, {}>((_props, ref) => (
  <section className="fade-section" ref={ref as React.RefObject<HTMLElement>}>
    <h2>Why us?</h2>
    <p>
      Navseego stands out for its ease of use, scalability, and accessibility. Our technology is designed to be rapidly deployable and customisable for any environment, ensuring that everyone can find their way with confidence.
    </p>
    <p>
      We are passionate about making navigation effortless and inclusive, leveraging the latest in computer vision and user experience design.
    </p>
    <h3>Who we work with</h3>
    <ul>
      <li>Universities</li>
      <li>Hospitals</li>
      <li>Airports</li>
      <li>Large campuses</li>
      <li>Complex public spaces</li>
    </ul>
    <h3>Contact us</h3>
    <p>
      Get in touch: <a href="mailto:hi@campusvirtual.io">hi@campusvirtual.io</a>
    </p>
    <div style={{ height: '8vh' }} />
  </section>
))

export default WhyUs; 