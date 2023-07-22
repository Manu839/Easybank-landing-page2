import React from 'react';
import online from '../images/icon-online.svg';
import budgeting from '../images/icon-budgeting.svg';
import onboarding from '../images/icon-onboarding.svg';
import api from '../images/icon-api.svg';

 function Sectiontwo() {
  return (
    <div className='valueService_container w-full pl-5 pr-5 xl:pl-0 xl:pr-0 bg-LightGrayishBlue flex justify-center'>
        <main className='wrapper py-16'>
            <header>
                <h3 className='text-3xl text-center  xl:pl-36 xl:pr-16 md:text-left'>Why choose Easybank?</h3>
                <p className='my-8 text-lg text-center text-GrayishBlue  xl:pl-36 xl:pr-16 md:text-left'>
                    We leverage Open Banking to turn your bank account into your financial hub.
                    <br />
                    Control your finances like never before.
                </p>
            </header>
            <div className='valueItem  xl:pl-36 xl:pr-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid-rows-4 md:grid-rows-2 xl:grid-rows-1 justify-center md:justify-between'>
                <div className='valueItem_text pt-3 text-center xl:text-start'>
                    <img className='ml-auto mr-auto xl:ml-0 xl:mr-0 pt-3 ' src={online} alt="Online banking icon; format: svg" />
                    <h4 className='text-xl pt-3'>Online Banking</h4>
                    <p className='pt-3 text-GrayishBlue'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                </div>
                <div className='valueItem_text text-center xl:text-start pt-3'>
                    <img className='ml-auto mr-auto xl:ml-0 xl:mr-0 pt-3 ' src={budgeting} alt="Simple Budgeting icon; format: svg" />
                    <h4 className='text-xl pt-3'>Simple Budgeting</h4>
                    <p className='pt-3 text-GrayishBlue'>See exctly where your money goes each month. Receieve notificatons when you close to hitting your limits.</p>
                </div> 
                <div className='valueItem_text text-center xl:text-start pt-3'>
                    <img className='ml-auto mr-auto xl:ml-0 xl:mr-0 pt-3' src={onboarding} alt="Fast Onboarding icon; format: svg" />
                    <h4 className='text-xl pt-3'>Fast Onboarding</h4>
                    <p className='pt-3 text-GrayishBlue'>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                </div>
                <div className='valueItem_text text-center xl:text-start pt-3'>
                    <img className='ml-auto mr-auto xl:ml-0 xl:mr-0 pt-3' src={api} alt="Open API icon; format: svg" />
                    <h4 className='text-xl pt-3'>Open API</h4>
                    <p className='pt-3 text-GrayishBlue'> Manage your savings, investments, pension and much more from one account. Tracking your money has never ben easier.</p>
                </div>
            </div>
        </main>
    </div>
  )
};
export default Sectiontwo;