// eslint-disable-next-line no-unused-vars
import React,{useEffect,useState} from 'react'

const FilterBar = () => {
  const [navStateCat,setNavStateCat] = useState(false)
  const onNavScroll = () =>{
    if(window.scrollY > 30){
        setNavStateCat(true);
    }else{
        setNavStateCat(false);
    }
}
useEffect(() => {
    window.addEventListener('scroll', onNavScroll)
    return () => {
    window.removeEventListener('scroll', onNavScroll)
    }
}, []);

  return (
    < >
         <div>
         {/* <header className={!navStateCat?`absolute  top-20 left-0 right-0 opacity-100 z-50`:`fixed top-0 left-0 right-0 h-[9vh] flex items-center opacity-100 z-[500] blur-effect-theme`}> */}
            filter bar d items-center justify-items-center gap-7 lg:gap-5 mt-7 grid-cols-3 xl:grid-cols-2 sm:gri
         
          </div>
    </>
  )
}

export default FilterBar