import React, { useState } from 'react'
import { RightIcon } from './Icons';

const Packages = () => {
  const Items = [
    { plan: "Starter", price: "$2.80", pricePremium: "$5.80" },
    { plan: "Standard", price: "$4.20", pricePremium: "$8.80" },
    { plan: "Suprem", price: "$7.00", pricePremium: "$12.80" },
  ]

  const [first, setfirst] = useState("tab1")
  function tabchange(tabs) {
    setfirst(tabs)
  } return (
    <div className='container max-w-[1120px] flex flex-col mt-12 sm:mt-16 md:mt-20 lg:mt-[96px]'>
      <div className='flex flex-col max-w-[856px] mx-auto'>
        <h2 className='text-black text-center font-Poppins font-semibold text-[34px] sm:text-[44px] md:text-[50px] leading-[60px] max-w-[650px]'>Ready to get started with Lemon Wares?</h2>
        <p className='text-black font-Poppins text-[25px] font-normal text-center leading-[25px] mt-[38px]'>Choose the package that suits you</p>
        <div className='flex items-center justify-center my-[57px] flex-col gap-6 sm:gap-0 sm:flex-row'>
          <p className='text-black font-Poppins text-[25px] font-normal text-center leading-[25px]'>Monthly</p>
          <span className='flex w-[93px] h-[50px] rounded-full bg-[#B00000] ml-8 mr-7 relative  items-center cursor-pointer'><span className='flex w-[30px] h-[30px] bg-white rounded-full absolute left-2'></span></span>
          <p className='text-black font-Poppins text-[25px] font-normal text-center leading-[25px] relative'>Yearly <span className='text-black absolute font-Poppins text-[10px] font-medium text-center leading-[9px] text-nowrap bg-[#FFE87A] p-2 rounded-lg ml-4'>20%  discount</span></p>
        </div>
        <div className='flex items-center w-full relative after:absolute after:bg-[#C4C4C4] after:w-full after:h-[2px] sm:after:h-1 after:-bottom-[6px] after:left-0 pt-[14px]'>
          <div className={`${first === "tab1" && "relative after:absolute after:-bottom-[6px] after:z-20 transition duration-300 after:w-full after:h-[2px] sm:after:h-1  after:bg-[#B00000] after:left-0"} w-1/2 flex justify-center`}><button onClick={() => tabchange("tab1")} className={` font-Poppins text-xl xs:text-2xl sm:text-[30px] text-black font-semibold !leading-10`}>Basic</button></div>
          <div className={`${first === "tab2" && "relative after:absolute after:-bottom-[6px] after:z-20 transition duration-300 after:w-full after:h-[2px] sm:after:h-1  after:bg-[#B00000] after:left-0"} w-1/2 flex justify-center`}><button onClick={() => tabchange("tab2")} className=' font-Poppins text-xl xs:text-2xl sm:text-[30px] text-black font-semibold !leading-10'>Premium</button></div>
        </div>
      </div>
      {
        first === "tab1" && <div className='grid lg:mb-10 lg:grid-cols-3 mt-10 sm:mt-16 md:mt-[95px] gap-7 lg:gap-0'>
          {
            Items.map((items, index) => (
              <div key={index} className=' bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.25)] border-[1.5px] border-[#C4C4C4] rounded-2xl lg:max-w-[299px] w-full h-auto'>
                <div className='p-[34px]'>
                  <h2 className=' text-[28px] font-Poppins font-semibold text-black leading-6'>{items.plan}</h2>
                  <p className=' font-Poppins text-xs font-normal text-black mt-3 leading-[18px]'>with all your customers via all conversation channels in one central dashboard.</p>
                  <p className=' text-black text-4xl sm:text-[42px] font-semibold font-Poppins leading-8 mt-5 md:mt-7'>{items.price}</p>
                  <span className='text-black text-sm font-Poppins font-light'>Per month</span>
                  <button className=' text-black font-semibold font-Poppins text-sm text-center w-full bg-transparent border-[2px] border-black rounded-xl leading-8 py-[9px] my-6 sm:my-8 md:my-[35px]'>Choose this Plan</button>
                  <div className='flex flex-col sm:flex-row lg:flex-col justify-between sm:justify-around lg:justify-start'>
                    <div>
                      <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-bold gap-4 sm:gap-6'><span><RightIcon /></span>2GB SSD</p>
                      <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>10GB Bandwidth</p>
                      <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>15 Email Accounts</p>
                      <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>Unlimited Database</p>
                      <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>4 Subdomains</p>
                    </div>
                    <div>
                      <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px] sm:mt-0 lg:mt-[15px]'><span><RightIcon /></span>1 Parked Domain</p>
                      <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>2 Websites</p>
                      <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>Free SSL</p>
                      <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px] mb-[12px]'><span><RightIcon /></span>Softaculous</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      }
      {
        first === "tab2" && <div className='grid lg:mb-10 lg:grid-cols-3 mt-10 sm:mt-16 md:mt-[94px] gap-7 lg:gap-0'>
          {
            Items.map((items, index) => (
              <div key={index} className=' bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.25)] border-[1.5px] border-[#C4C4C4] rounded-2xl lg:max-w-[299px] w-full h-auto'>
                <div className='p-[34px]'>
                  <h2 className=' text-[28px] font-Poppins font-semibold text-black leading-6'>{items.plan}</h2>
                  <p className=' font-Poppins text-xs font-normal text-black mt-3 leading-[18px]'>with all your customers via all conversation channels in one central dashboard.</p>
                  <p className=' text-black text-4xl sm:text-[42px] font-semibold font-Poppins leading-8 mt-5 md:mt-7'>{items.pricePremium}</p>
                  <span className='text-black text-sm font-Poppins font-light'>Per month</span>
                  <button className=' text-black font-semibold font-Poppins text-sm text-center w-full bg-transparent border-[2px] border-black rounded-xl leading-8 py-[9px] my-6 sm:my-8 md:my-[35px]'>Choose this Plan</button>
                  <div className='flex flex-col sm:flex-row lg:flex-col justify-between sm:justify-around lg:justify-start'>
                    <div>
                      <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-bold gap-4 sm:gap-6'><span><RightIcon /></span>2GB SSD</p>
                      <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>10GB Bandwidth</p>
                      <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>15 Email Accounts</p>
                      <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>Unlimited Database</p>
                      <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>4 Subdomains</p>
                    </div>
                    <div>
                      <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px] sm:mt-0 lg:mt-[15px]'><span><RightIcon /></span>1 Parked Domain</p>
                      <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>2 Websites</p>
                      <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>Free SSL</p>
                      <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px] mb-[12px]'><span><RightIcon /></span>Softaculous</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default Packages
