import React, { useRef } from 'react'

const WhatWeDo = React.forwardRef<HTMLElement, {}>((_props, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleFullScreen = () => {
    if (!videoRef.current) return

    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message}`
        )
      })
    } else {
      document.exitFullscreen()
    }
  }

  return (
    <section className="fade-section" ref={ref as React.RefObject<HTMLElement>}>
      <h2>What do we do?</h2>
      <p>
        Compared to existing virtual tour technology, CampusVirtual offers a
        large-scale and more straightforward creation process. In short,
        Navseego enables users to create virtual tours of any size and
        complexity with ease.
      </p>
      <div className="video-container">
        <video ref={videoRef} muted autoPlay loop playsInline>
          <source src="/soundless.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          className="fullscreen-btn"
          onClick={toggleFullScreen}
          aria-label="Toggle fullscreen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
        </button>
      </div>
      <div className="features-grid">
        <div className="feature-card">
          <h3>360 Video Mapping</h3>
          <p>
            Data collection takes as long as it takes to walk through your
            building/campus.
          </p>
        </div>
        <div className="feature-card">
          <h3>Pathfinding</h3>
          <p>
            Students, teachers, patients, and employees can find how to get to
            any location within your campus.
          </p>
        </div>
        <div className="feature-card">
          <h3>Large-scale</h3>
          <p>Capable of serving over 64 hectares of campus.</p>
        </div>
        <div className="feature-card">
          <h3>Customisable</h3>
          <p>
            Users can customise the tour to their liking, including noting room
            names, seeing where you are on a floor, and searching across
            multiple buildings.
          </p>
        </div>
        <div className="feature-card">
          <h3>Mobile-friendly</h3>
          <p>
            Navseego is usable even on mobile devices, making it easy to use on
            the go.
          </p>
        </div>
        <div className="feature-card">
          <h3>Accessibility</h3>
          <p>
            Navseego is accessible to people with disabilities, providing a
            seamless experience for everyone, even allowing searches for
            step-free routes.
          </p>
        </div>
        <div className="feature-card">
          <h3>Upgradeability</h3>
          <p>
            Over time, we can update the tour to reflect changes in your campus,
            including adding new rooms or blocking off restricted areas.
          </p>
        </div>
      </div>
      <img
        src="/labelled-interface.png"
        alt="interface"
        className="interface-img"
      />
    </section>
  )
})

export default WhatWeDo
