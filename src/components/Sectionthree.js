import React from 'react';
import money from '../images/image-currency.jpg';
import confetti from '../images/image-confetti.jpg';
import plane from '../images/image-plane.jpg';
import restaurant from '../images/image-restaurant.jpg';


 function  Sectionthree() {
  return (
    <div className='article_container  xl:pl-36 xl:pr-16 w-full flex justify-center'>
        <main className='wrapper py-16'>
            <header>
                <h3 className='text-3xl text-center md:text-left'>Latest Articles</h3>
            </header>
            <div className='article py-5 grid grid-cols-1 xl:grid-cols-4 grid-rows-4 xl:grid-rows-1 md:justify-between'>
                
                <a  href='/#'  target='_blank' className='article_card hover:scale-105  hover:duration-300 mb-12 xl:mb-0 sm:flex sm:flex-col sm:items-start '>
                    <div className=' card_header'>
                        <img className=' xl:h-[219px]  xl:w-96' src={money} alt="money img; format: jpg" />
                    </div>
                    <div className="card_body p-5">
                        <span className='author py-3 text-GrayishBlue'>By Claire Robinson</span>
                        <h4 className='pt-3 text-xl'>Receive money in any currency with no fees</h4>
                        <p className='pt-3 text-GrayishBlue'>
                            The world is getting smaller and we are becoming more mobile. 
                            So why should you be forced to receive money in a single...
                        </p>
                    </div>
                </a>

                <a href='/#'  target='_blank' className='article_card hover:scale-105  hover:duration-300 '>
                    <div className='card_header'>
                        <img src={restaurant} alt="confetti img; format: jpg" />
                    </div>
                    <div className="card_body pl-5 pr-5 py-5">
                        <span className='author pt-3 text-GrayishBlue'>By Wilson Hutton</span>
                        <h4 className='text-xl pt-3'>Treat yourself without worrying about money</h4>
                        <p className='pt-3 text-GrayishBlue'>
                            Our simple budgeting feature allows you to seperate out your spending and set realistic limits each month. 
                            That means you...
                        </p>
                    </div>
                </a>

                <a href='/#'  target='_blank' className='article_card hover:scale-105  hover:duration-300 '>
                    <div className='card_header '>
                        <img src={plane} alt="plane img; format: jpg" />
                    </div>
                    <div className="card_body pl-5 pr-5 py-5">
                        <span className='author pt-3 text-GrayishBlue'>By Wilson Hutton</span>
                        <h4 className='text-xl pt-3'>Take your Easybank card wherever you go</h4>
                        <p className='pt-3 text-GrayishBlue'>
                            We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad.
                            We'll even show you...
                        </p>
                    </div>
                </a>

                <a href='/#'  target='_blank' className='article_card hover:scale-105 hover:duration-300'>
                    <div className='card_header'>
                        <img src={confetti} alt="Open API icon; format: svg" />
                    </div>
                    <div className="card_body pl-5 pr-5 py-5">
                        <span className='author pt-3 text-GrayishBlue'>By Claire Robinson</span>
                        <h4 className='text-xl pt-3'>Our invite-only Beta accounts are now live!</h4>
                        <p className='pt-3 text-GrayishBlue'>
                            After a lot of hardwork by the whole team, we are excited to lunch our closed beta.
                            It's easy to request an invite through the site...
                        </p>
                    </div>
                </a>
                
            </div>
        </main>
    </div>

  )
};
export default Sectionthree;