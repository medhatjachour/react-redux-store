// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types';
const Title = ({title}) => {
  return (
    <div
        className='grid  items-center'
    >
        <h1 className='text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900'>
            {title}
        </h1>
    </div>
  )
}
Title.propTypes = {

    title:  PropTypes.string,
 
  };
export default Title