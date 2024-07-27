// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types';

const Footer = ({footerAPI:{titles,links}})=> {
  return (
    <>
        <footer className='bg-theme pt-7 pb-6'>
            <div className='hero-main-container text-slate-200'>
                <div className=' grid items-start grid-cols-3 max-w-2xl w-full m-auto'>
                    {titles?.map((values,index)=>(
                        <div key={index} className='grid items-center mb-4 '>
                            <h1 className='text-lg lg:text-base md:text-sm uppercase font-semibold'>{values.title}</h1>
                        </div>
                    ))}
                    {links?.map((list,index)=>(
                        <ul key={index} className=' grid items-center gap-1'>
                                
                            {list?.map((values,i)=>(
                                <li key={i} className=' text-sm sm:text-xs'>
                                    {values.link}
                                </li>
                            ))}
                        </ul>
                    ))}
                </div> <div className='mt-5 text-center'>
            <p className='text-sm md:text-center'>Copyright<sup className='text-base font-bold'>&copy;</sup> All Reserved Rights <span className='font-semibold'>medhatjachour 2024</span></p>
          </div>
            </div>
        </footer>
    </>
  )
}
Footer.propTypes = {
    footerAPI: {
        titles:  PropTypes.array,
        links:  PropTypes.array
    }
  };
export default Footer