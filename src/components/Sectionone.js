import React from 'react';
import imgHero from '../images/image-mockups.png';

 function Sectionone() {
  return (
    <div className='bg-hero-desktop bg-no-repeat xl:bg-hero-mobile  xl:bg-bg-50 h-[800px] xl:bg-right'>
    <div className=" w-full text-DarkBlue  flex justify-center">
        <header className="wrapper  flex flex-col-reverse xl:flex-row xl:justify-between">
           <section className='heroText xl:-my-44 w-full xl:w-2/5  h-4/6 xl:h-full pt-32 sm:pt-40 xl:pt-0 flex flex-col items-center md:items-start xl:justify-center'>
              <h1 className='text-3xl xl:text-5xl mb-4 pl-5 pr-5 xl:pl-36 xl:pr-16 text-center md:text-left'>Next generation digital banking</h1>
              <p className='text-lg text-GrayishBlue pl-5 pr-5 mb-8 sm:mb-8 xl:pl-36 xl:pr-20 xl:pt-5 xl:mb-4 text-center md:text-left'>
                  Take your financial life online.
                  Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
              </p>
              <button className='button_gradient w-40 h-14 bg-gradient-to-tr from-LimeGreen to-GrayishBlue hover:bg-gradient-to-bl xl:mx-36  hover:duration-300 xl:my-5 xl:h-12 rounded-full flex justify-center items-center'>Request invite</button>
           </section>
           <section className='heroImage w-full xl:w-3/5 h-2/6 mb-4 sm:mb-16 lg:mb-24 xl:mb-0 xl:h-full flex justify-end items-center relative'>
            <img src={imgHero} alt="hero img;"/>
           </section>
        </header>
    </div>
    </div>
  )
};
export default Sectionone;