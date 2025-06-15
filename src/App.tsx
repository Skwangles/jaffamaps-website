import './App.css'
import { useEffect, useRef } from 'react'
import CloudsBackground from './CloudsBackground'
import Header from './Header'
import WhoAreWe from './WhoAreWe'
import WhatWeDo from './WhatWeDo'
import WhyUs from './WhyUs'
import GrassFooter from './GrassFooter'

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
