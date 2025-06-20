import React from 'react'

const WhoAreWe = React.forwardRef<HTMLElement, {}>((_props, ref) => (
  <section className="fade-section" ref={ref as React.RefObject<HTMLElement>}>
    <h2>Who are we?</h2>
    <p>
      CampusVirtual was conceived by a frustrated university student struggling
      to find his classroom. During his final year at university, Alexander
      developed this software to map the University of Waikato, soon realising
      its potential for use in complex environments such as hospitals, airports,
      and other places where it is easy to lose your way. By employing
      state-of-the-art computer vision technology, CampusVirtual created a
      virtual tour that is not only accurate but also easy to navigate.
    </p>
    <p>
      After presenting his prototype at the University of Waikato's Engineering
      Design Show, Alexander was awarded the
      <a
        href="https://www.facebook.com/WUcms/posts/pfbid022NgPBEFqTcWFVUDYsFXhyTtbiWySkfKXBFLjVZgHKyrw71gmcAtJrEmH3Yz2Xexfl"
        target="_blank"
        rel="noopener noreferrer"
      >
        {' '}
        People's Choice Award{' '}
      </a>
      for his project, and even attracted interest from the
      <a
        href="https://www.waikatotimes.co.nz/nz-news/360458379/google-street-view-goes-indoors-under-development-university-waikat"
        target="_blank"
        rel="noopener noreferrer"
      >
        {' '}
        local newspaper
      </a>
      .
    </p>
    <img
      src="/peoples-choice.jpg"
      alt="People's Choice Award"
      className="our-journey-img"
    />
  </section>
))

export default WhoAreWe
