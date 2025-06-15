import './App.css'
import { useEffect, useRef } from 'react'
import CloudsBackground from './CloudsBackground'
import Header from './Header'
import WhoAreWe from './WhoAreWe'
import WhatWeDo from './WhatWeDo'
import WhyUs from './WhyUs'
import GrassFooter from './GrassFooter'
import logo from './assets/logo.svg'

function useFadeInOnScroll(scrollContainerRef: React.RefObject<HTMLDivElement | null>) {
  const refs: React.RefObject<HTMLElement | null>[] = [
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null)
  ]
  useEffect(() => {
    const handleScroll = () => {
      refs.forEach(ref => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect()
          // Trigger fade-in if section is in viewport
          if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
            ref.current.classList.add('fade-in')
          }
        }
      })
    }
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      handleScroll()
    }
    return () => {
      if (container) container.removeEventListener('scroll', handleScroll)
    }
  }, [refs, scrollContainerRef])
  return refs
}

// Cloud SVG from cloud.svg
const cloudSVG = (
  <svg
    width="120"
    height="80"
    viewBox="0 0 59.639938 40.973583"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{ display: 'block' }}
  >
    <g transform="translate(-11.239937,-11.583056)">
      <ellipse
        style={{ fill: '#e5f3f3', fillOpacity: 1 }}
        cx="28.140257"
        cy="37.402676"
        rx="16.90032"
        ry="15.153963"
      />
      <ellipse
        style={{ fill: '#e5f3f3', fillOpacity: 1 }}
        cx="52.834064"
        cy="30.326216"
        rx="18.046013"
        ry="18.869041"
      />
      <ellipse
        style={{ fill: '#e5f3f3', fillOpacity: 1 }}
        cx="52.812"
        cy="33.403309"
        rx="18.046013"
        ry="18.869041"
      />
      <rect
        style={{ fill: '#e5f3f3', fillOpacity: 1 }}
        width="25.762741"
        height="9.1684961"
        x="26.52182"
        y="43.215042"
      />
    </g>
  </svg>
)

function App() {
  const pageRef = useRef<HTMLDivElement>(null)
  const [landingRef, whoRef, whatRef, whyRef] = useFadeInOnScroll(pageRef)

  return (
    <>
      <div className="sky-bg scrollable" ref={pageRef}>
        <CloudsBackground />
        <br/>
        <Header ref={landingRef} />
        <WhatWeDo ref={whatRef} />
        <WhoAreWe ref={whoRef} />      
        <WhyUs ref={whyRef} />
      </div>
      <GrassFooter />
    </>
  )
}

export default App
