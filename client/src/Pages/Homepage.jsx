import React from 'react'
// components
import Home from '../Components/Home'

// import homepagelaout
import DefaultLayoutHoc from '../Layout/Default-layout'

const Homepage = () => {
  return (
    <>
    
    <Home />
    </>
  )
}

export default DefaultLayoutHoc(Homepage);