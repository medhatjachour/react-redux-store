// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Navbar,FlexContent, Hero, Sales, ItemsSlider,Footer ,Cart} from './components'
import { heroApi,popularSales, topRateSales, highlight,sneaker,story,footerAPI } from './data/data'

const App = () => {
  return (
    < > 
      <Navbar/>
      <Cart/>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroApi = {heroApi}/>
        <Sales endpoint = {popularSales} popular/>
        <FlexContent endpoint = {highlight} isHighlight/>
        <Sales endpoint = {topRateSales}/>
        <FlexContent endpoint = {sneaker}/>
        <ItemsSlider endpoint = {story}/>
      </main>
      <Footer footerAPI = {footerAPI}/>
    </>
  )
}

export default App