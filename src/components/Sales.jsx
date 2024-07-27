// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types';
import Title from './utils/Title'
import Item from './utils/Item'

const Sales = ( {popular, endpoint : { title, items }}) => {
  return (
    <>
      <div className='hero-main-container'>
        <Title title={title} />
        <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${popular ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
          {items?.map((item, i) => (
            <Item {...item} key={i} popular={popular} />
          ))}
        </div>
      </div>
    </>
  )
}
Sales.propTypes = {
    endpoint:{
        title: PropTypes.string,
        items: PropTypes.array,
    },
    popular:PropTypes.bool
}

export default Sales