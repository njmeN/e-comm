import React from 'react'
import { Hero } from './hero'

import { Categories } from './Categories'
import { Banner } from './Banner'
import { FeaturesSection } from './FeaturesSection'
import { LatestNews } from './LatestNews'
import { FeaturedProducts } from './FeaturedProducts'
import { SearchBar } from './SearchBar'
// import { DealsSection } from './DealsSection'

export const Home = () => {
  return (
    <>
    <Hero/>
    {/* <DealsSection/> */}
    <Categories/>
    <Banner/>
    <FeaturesSection/>
    <LatestNews/>
    <FeaturedProducts/>
    <SearchBar/>
    
    </>


    
  )
}
