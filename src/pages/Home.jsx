// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FlexContent, Hero, Sales, ItemsSlider} from '../components'
import { heroApi,popularSales, topRateSales, highlight,sneaker,story } from '../data/data'

const Home = () => {
  return (
    < >
        <main className='flex flex-col gap-16 relative'>
            <Hero heroApi = {heroApi}/>
            <Sales endpoint = {popularSales} popular/>
            <FlexContent endpoint = {highlight} isHighlight/>
            <Sales endpoint = {topRateSales}/>
            <FlexContent endpoint = {sneaker}/>
            <ItemsSlider endpoint = {story}/>
      </main>
    </>
  )
}

export default Home