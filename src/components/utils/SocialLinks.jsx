// eslint-disable-next-line no-unused-vars
import React from 'react'

import PropTypes from 'prop-types';
const SocialLinks = ({icon}) => {
  return (
    <div>
        <img
            src={icon}
            alt='social'
            className=' w-8 h-8 flex items-center cursor-pointer md:w-6 md:h6
            sm:w-5 sm:h-5 transition-all duration-200 hover:scale-110'
        />
    </div>
  )
}
SocialLinks.propTypes = {
    icon : PropTypes.string,
  };
export default SocialLinks