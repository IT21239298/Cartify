import React from 'react'
import Banner from '../../components/home/Banner'
import ImageScanner from '../../components/home/ImageScanner'
import FooterSecondary from '../../components/home/FooterSecondary'
import Card from '../../components/home/Card'

function Home() {
  return (
    <>
      <Banner />
      <ImageScanner />
      <Card/>
      {/* <Footer /> */}
      <FooterSecondary />
    </>
  )
}

export default Home