import React from 'react'
import Banner from '../../components/home/Banner'
import ImageScanner from '../../components/home/ImageScanner'
import FooterSecondary from '../../components/home/FooterSecondary'

function Home() {
  return (
    <>
      <Banner />
      <ImageScanner />
      {/* <Footer /> */}
      <FooterSecondary />
    </>
  )
}

export default Home