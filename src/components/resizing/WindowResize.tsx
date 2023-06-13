import { useState, useEffect } from 'react'

interface PorpsMedia{
  children: React.ReactNode
}

export function MobileSize({children}: PorpsMedia){
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {isMobile && children}
    </>
  )
}

export function TabletSize({children}: PorpsMedia){
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 769 && window.innerWidth <= 1100)

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 769 && window.innerWidth <= 1100)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {isTablet && children}
    </>
  )
}

export function DeskSize({children}: PorpsMedia){
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1101)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1101)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {isDesktop && children}
    </>
  )
}

export function AllWindows({children}: PorpsMedia){
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 769 && window.innerWidth <= 1100)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1101)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth >= 769 && window.innerWidth <= 1100);
      setIsDesktop(window.innerWidth >= 1101);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile && children}
      {isTablet && children}
      {isDesktop && children}
    </div>
  );
}

