import React, { useState } from 'react'
import { RightIcon } from './Icons';

const Packages = () => {
  const [toggel, setToggel] = useState(false)
  const togglePrice = () => {
    setToggel(!toggel);
  }
  const Items = [
    { plan: "Starter", yearPlan: "Standard", price: "$2.80", yearlyPrice: "$12.80", pricePremium: "$5.80" },
    { plan: "Standard", yearPlan: "Gold", price: "$4.20", yearlyPrice: "$13.20", pricePremium: "$8.80" },
    { plan: "Suprem", yearPlan: "Premium", price: "$7.00", yearlyPrice: "$15.00", pricePremium: "$12.80" },
  ]
  const [first, setfirst] = useState("tab1")
  function tabchange(tabs) {
    setfirst(tabs)
  } return (
    <div className='container max-w-[1120px] flex flex-col mt-5 xs:mt-8 sm:mt-16 md:mt-20 lg:mt-[96px]'>
      <div className='flex flex-col max-w-[856px] mx-auto'>
        <h2 className='text-black text-center font-Poppins font-semibold text-[27px] xs:text-[34px] sm:text-[44px] md:text-[50px] sm:leading-[60px] max-w-[650px]'>Ready to get started with Lemon Wares?</h2>
        <p className='text-black font-Poppins text-xl sm:text-[25px] font-normal text-center sm:leading-[25px] mt-3 xs:mt-5 sm:mt-7 md:mt-[38px]'>Choose the package that suits you</p>
        <div className='flex items-center justify-center my-7 sm:my-10 lg:my-[57px]'>
          <p className='text-black font-Poppins text-base xs:text-xl sm:text-[25px] font-normal text-center leading-[25px]'>Monthly</p>
          <label class="relative inline-flex items-center cursor-grab ml-2 xs:ml-3 mr-2 :mr-4 sm:ml-8 sm:mr-7">
            <input onClick={togglePrice} type="checkbox" value="" class="sr-only peer" />
            <div class="group peer ring-0 bg-[#B00000]   rounded-full outline-none duration-300 after:duration-300 w-[50px] xs:w-[70px] sm:w-[93px] h-[25px] xs:h-[40px] sm:h-[50px]  shadow-md peer-focus:outline-none   after:rounded-full after:absolute after:bg-gray-50 peer-checked:after:bg-[#FFE87A] after:outline-none after:h-4 xs:after:h-[23px] after:w-4 xs:after:w-[23px] sm:after:h-[30px] sm:after:w-[30px] after:top-1 xs:after:top-2 sm:after:top-[9px] after:left-[7px] xs:after:left-[9px] after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-5 xs:peer-checked:after:translate-x-7 sm:peer-checked:after:translate-x-11 peer-hover:after:scale-105 peer-checked:after:rotate-0">
            </div>
          </label>
          <p className={`${toggel ? "text-[#B00000]" : "text-black"}  font-Poppins text-base xs:text-xl sm:text-[25px] font-normal items-center mr-12 xs:mr-16 text-center leading-[25px] relative`}>Yearly <span className={`${toggel ? "scale-110" : ""} text-black absolute font-Poppins text-[10px] font-medium text-center leading-[9px] text-nowrap bg-[#FFE87A] p-[6px] sm:p-2 rounded-lg ml-3 sm:ml-4`}>20%  discount</span></p>
        </div>
        <div className='flex items-center w-full relative after:absolute after:bg-[#C4C4C4] after:w-full after:h-[2px] sm:after:h-1 after:-bottom-[6px] after:left-0 pt-2 xs:pt-[14px]'>
          <div className={`${first === "tab1" && "relative after:absolute after:-bottom-[6px] after:z-20 transition duration-300 after:w-full after:h-[2px] sm:after:h-1  after:bg-[#B00000] after:left-0"} w-1/2 flex justify-center`}><button onClick={() => tabchange("tab1")} className={` font-Poppins text-xl xs:text-2xl sm:text-[30px] text-black font-semibold !leading-10`}>Basic</button></div>
          <div className={`${first === "tab2" && "relative after:absolute after:-bottom-[6px] after:z-20 transition duration-300 after:w-full after:h-[2px] sm:after:h-1  after:bg-[#B00000] after:left-0"} w-1/2 flex justify-center`}><button onClick={() => tabchange("tab2")} className=' font-Poppins text-xl xs:text-2xl sm:text-[30px] text-black font-semibold !leading-10'>Premium</button></div>
        </div>
      </div>
      {
        first === "tab1" && <div className='grid lg:mb-10 lg:grid-cols-3 mt-10 sm:mt-16 md:mt-[95px] gap-7 lg:gap-0'>
          {
            Items.map((items, index) => (
              <div key={index} className=' bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.25)] duration-300 hover:shadow-[0_0_50px_0_rgba(41,41,42,0.07)] border-[1.5px] border-[#C4C4C4] rounded-2xl lg:max-w-[299px] w-full h-auto'>
                <div className='p-[26px] sm:p-[34px]'>
                  {
                    toggel ? (<h2 className=' text-[28px] font-Poppins font-semibold text-black leading-6'>{items.yearPlan}</h2>) : (<h2 className=' text-[28px] font-Poppins font-semibold text-black leading-6'>{items.plan}</h2>)
                  }
                  <p className=' font-Poppins text-xs font-normal text-black mt-3 leading-[18px]'>with all your customers via all conversation channels in one central dashboard.</p>
                  {
                    toggel ? (<p className=' text-black text-4xl sm:text-[42px] font-semibold font-Poppins leading-8 mt-5 md:mt-7'>{items.yearlyPrice}</p>) : (<p className=' text-black text-4xl sm:text-[42px] font-semibold font-Poppins leading-8 mt-5 md:mt-7'>{items.price}</p>)
                  }
                  <span className='text-black text-sm font-Poppins font-light'>Per {toggel ? "year" : "month"}</span>
                  <button className=' text-black duration-300 hover:text-[#B00000] hover:border-[#B00000] hover:shadow font-semibold font-Poppins text-sm text-center w-full bg-transparent border-[2px] border-black rounded-xl leading-8 py-[9px] my-6 sm:my-8 md:my-[35px]'>Choose this Plan</button>
                  <div className='flex flex-col sm:flex-row lg:flex-col justify-between sm:justify-around lg:justify-start'>
                    <div>
                      <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-bold gap-4 sm:gap-6'><span><RightIcon /></span>2GB SSD</p>
                      <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>{toggel ? "20GB" : "10GB"} Bandwidth</p>
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
