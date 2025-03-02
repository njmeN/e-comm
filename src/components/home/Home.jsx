import React from 'react'
import { Hero } from './hero'
import { DealsSection } from './dealsSection'
import { Categories } from './Categories'
import { Banner } from './Banner'
import { FeaturesSection } from './FeaturesSection'
import { LatestNews } from './LatestNews'
import { FeaturedProducts } from './FeaturedProducts'
import { SearchBar } from './SearchBar'


export const Home = () => {
  return (
    <>
    <Hero/>
    <DealsSection/>
    <Categories/>
    <Banner/>
    <FeaturesSection/>
    <LatestNews/>
    <FeaturedProducts/>
    <SearchBar/>
    
    </>


    
  )
}
