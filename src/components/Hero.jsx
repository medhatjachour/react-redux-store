// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types';
import Clips from './utils/Clips';
import SocialLinks from './utils/SocialLinks';

const Hero = ({heroapi:{
    title,subtitle,img,btnText,videos,socialLinks
}}) => {
  return (
    <>
        <div className='relative h-auto w-auto flex-col'>
        <div className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>
        <div className='relative opacity-100 z-20 grid items-center justify-items-center hero-main-container'>
          <div className='grid items-center justify-items-center mt-28 md:mt-24'>
            <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'>{title}</h1>
            <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'>{subtitle}</h1>
                    <button type='button'
                    className='button-theme bg-slate-200 shadow-slate-200
                    rounded-xl my-5'
                     >{btnText}</button>
                     {/* <button className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
                        <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                        <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                        <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                        <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                        <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                        <p className="z-10">Discover More</p>
                    </button> */}
                    <div>
                        {
                            videos.map((val,index)=>(
                                <Clips 
                                key={index}
                                imgSrc = {val.imgSrc}
                                clip = {val.clip}

                                />
                            ))
                        }
                    </div>
                    <div>
                        {socialLinks.map((val,index)=>(
                            <SocialLinks
                                key={index}
                                icon= {val.icon}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <img src={img} 
                        className='w-auto h-[45vh] lg:h-[35vh] 
                        md:h-[31vh] sm:h-[21vh] xsm:h:[19vh]
                        transitions-theme -rotate-[25deg] 
                        hover:rotate-0 cursor-pointer object-fill'
                    alt="hero img" />
                </div>
            </div>
        </div>
    </>
  )
}

Hero.propTypes = {


    heroapi: {
        title:  PropTypes.string,
        subtitle:  PropTypes.string,
        img:  PropTypes.string,
        btntext:  PropTypes.string,
        videos: PropTypes.array,
        sociallinks: PropTypes.array
    }

  };
  
export default Hero