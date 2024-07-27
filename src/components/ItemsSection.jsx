// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types';

const ItemsSection = ({endpoint : { title, news}}) => {
    console.log(news);
  return (
  <>
    <div>{title}</div>
    </>
  )
}
ItemsSection.propTypes = {
   
    endpoint:{
        title: PropTypes.string,
        news: PropTypes.array,
    
    }
}

export default ItemsSection