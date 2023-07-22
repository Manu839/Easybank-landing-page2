import React, {useEffect, useState} from 'react';
import logo from '../images/logo.svg';
import hamburger from '../images/icon-hamburger.svg';
import closeIcon from '../images/icon-close.svg';

function Navigation() {
  const [toggle, setToggle] = useState(false)

  const hideNavigation = () => {
    setTimeout(() => {
        setToggle(false)
    }, 7000)
  }
  useEffect(() => {
    hideNavigation()
  }, [toggle])
  return (
    <div className='nav_container bg-white pl-3 xl:pr-96 pr-3 w-full h-16 flex justify-center z-40 fixed'>
        <nav className='wrapper xl:gap-24 h-16 w-96 text-center flex justify-between items-center relative'>
            
                <img className='z-50 xl:pr-40 xl:-mx-20' src={logo} alt="easybank logo"/>

            <div className='links'>
                <ul className={(toggle === true) ? 
                    'flex bg-white pl-10 pb-10 pr-10 gap-y-4 pt-10 font-semibold flex-col xl:flex-row absolute xl:static top-20 xl:top-0 right-0 w-full h-68 shadow-2xl rounded-md ' : 
                    'hidden xl:flex xl:gap-14 flex-col xl:flex-row fixed xl:static'}
                >
                    <li><a className='hover:border-b-4 hover:border-LimeGreen  hover:duration-300' href="!#">Home</a></li>
                    <li><a className='hover:border-b-4 hover:border-LimeGreen  hover:duration-300' href="!#">About</a></li>
                    <li><a className='hover:border-b-4 hover:border-LimeGreen  hover:duration-300' href="!#">Contact</a></li>
                    <li><a className='hover:border-b-4 hover:border-LimeGreen  hover:duration-300' href="!#">Blog</a></li>
                    <li><a className='hover:border-b-4 hover:border-LimeGreen  hover:duration-300' href="!#">Careers</a></li>
                </ul>
            </div>

            <div className='hamburger'>
                <button className='bg-gradient-to-tr from-LimeGreen to-GrayishBlue hover:bg-gradient-to-bl hover:duration-300  w-40 h-12 rounded-full hidden xl:flex justify-center items-center'>Request invite</button>
                <div className='flex items-center justify-center xl:hidden' onClick={() => setToggle(!toggle)}>
                    {(toggle === false) ? <img src={hamburger} alt='hamburger icon'/>
                    : <img src={closeIcon} alt='close icon'/>
                    }
                </div>
            </div>
        </nav>
    </div>
  )
};
export default Navigation;