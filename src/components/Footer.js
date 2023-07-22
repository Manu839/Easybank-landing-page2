import React from 'react';
import logo from '../images/logo.svg';
import facebook from '../images/icon-facebook.svg';
import youtube from '../images/icon-youtube.svg';
import twitter from '../images/icon-twitter.svg';
import pintrest from '../images/icon-pinterest.svg';
import insta from '../images/icon-instagram.svg';

function Footer() {
  return (
    <footer className='footer_container bg-DarkBlue text-white flex justify-center'>
      <main className="wrapper h-full flex xl:gap-56 flex-col xl:flex-row items-center xl:justify-between xl:items-center py-16">

        <section className='socials w-full xl:w-4/6 h-full xl:gap-x-20 flex flex-col  items-center md:flex-row xl:justify-between'>
          
          <div className='logo_socials w-2/5 h-full flex xl:gap-14 flex-col items-center xl:items-start xl:justify-between'>
            <div className='logo w-40 h-fit bg-white py-5 px-3 xl:py-2 xl:px-4 rounded-full'>
              <img src={logo} alt="Easybank logo format.svg" className='w-32 h-8  object-coverscale-150 xl:scale-110' />
            </div>
            <div className='social_links gap-3 xl:gap-x-6 w-full h-fit flex justify-center xl:justify-start items-center my-8 xl:my-0'>
              <a href="/#"><img className='w-14' src={facebook} alt="facebook logo format.svg" /></a>
              <a href="/#"><img className='w-14' src={youtube} alt="youtube logo format.svg" /></a>
              <a href="/#"><img className='w-14' src={twitter} alt="twitter logo format.svg" /></a>
              <a href="/#"><img className='w-14' src={pintrest} alt="pinterest logo format.svg" /></a>
              <a href="/#"><img className='w-14' src={insta} alt="instagram logo format.svg" /></a>
            </div>
          </div>
          
          <section className='links w-3/5 grid gap-y-2 font-semibold text-center grid-cols-1 xl:gap-x-10 xl:gap-y-5 justify-center xl:grid-cols-2 xl:grid-rows-3'>
            <a className='hover:text-LimeGreen hover:duration-300' href="/#">About Us</a>
            <a className='hover:text-LimeGreen  hover:duration-300' href="/#">Contact</a>
            <a className='hover:text-LimeGreen  hover:duration-300' href="/#">Blog</a>
            <a className='hover:text-LimeGreen  hover:duration-300' href="/#">Careers</a>
            <a className='hover:text-LimeGreen  hover:duration-300' href="/#">Support</a>
            <a className='hover:text-LimeGreen  hover:duration-300' href="/#">Privacy Policy</a>
          </section>

        </section>

        <section className='invite w-full pt-5 xl:w-2/6 h-full flex flex-col items-center xl:items-end justify-between mt-2 xl:mt-0'>
          <button className='bg-gradient-to-tr from-LimeGreen  hover:duration-300 to-LightGrayishBlue hover:bg-gradient-to-bl w-40 h-14 xl:h-12 bg- rounded-full flex justify-center items-center mb-4 xl:mb-0'>
            Request invite
          </button>
          <p className='text-lg xl:pt-10 font-normal text-GrayishBlue'>&copy; Easybank. All rights reserved</p>
        </section>

      </main>
    </footer>
  )
};
export default Footer;