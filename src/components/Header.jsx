import React, { useState } from 'react'
import headerimg from '../assets/images/headerimg.webp'
import { HeaderLeftSvg, HeaderRight2Svg, HeaderRightFirstSvg } from './Icons';
const Header = () => {
    const [first, setfirst] = useState("tab1")
    function tabchange(tabs) {
        setfirst(tabs)
    }
    return (
        <div className='container max-w-[1220px] py-6 sm:py-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='flex flex-col'>
                    <div className='flex max-w-[250px] items-center justify-between relative after:absolute after:w-full after:h-[1px] after:bg-[#E5E5E5] after:-bottom-1 after:left-0'>
                        <button onClick={() => tabchange("tab1")} className={`${first === "tab1" && "!text-[#B00000] relative after:absolute after:-bottom-1 after:z-20 transition duration-300 after:w-[87%] after:h-[1px] after:rounded-full after:bg-[#B00000] after:left-[7%]"} text-[rgba(214,212,212,0.88)] font-Poppins font-semibold text-sm sm:text-[15px]`}>Hosting</button>
                        <button onClick={() => tabchange("tab2")} className={`${first === "tab2" && "!text-[#B00000] relative after:absolute after:-bottom-1 after:z-20 transition duration-300 after:w-[87%] after:h-[1px] after:rounded-full after:bg-[#B00000] after:left-[7%]"} text-[rgba(214,212,212,0.88)] font-Poppins font-semibold text-sm sm:text-[15px]`}>Domain</button>
                        <button onClick={() => tabchange("tab3")} className={`${first === "tab3" && "!text-[#B00000] relative after:absolute after:-bottom-1 after:z-20 transition duration-300 after:w-[87%] after:h-[1px] after:rounded-full after:bg-[#B00000] after:left-[7%]"} text-[rgba(214,212,212,0.88)] font-Poppins font-semibold text-sm sm:text-[15px]`}>SEO </button>
                        <button onClick={() => tabchange("tab4")} className={`${first === "tab4" && "!text-[#B00000] relative after:absolute after:-bottom-1 after:z-20 transition duration-300 after:w-[87%] after:h-[1px] after:rounded-full after:bg-[#B00000] after:left-[7%]"} text-[rgba(214,212,212,0.88)] font-Poppins font-semibold text-sm sm:text-[15px]`}>Email</button>
                    </div>
                    <div className='mt-[30px]'>
                        {
                            first === "tab1" && <div>
                                <h1 className='text-[#2E2E2E] font-Poppins font-bold text-[42px] sm:text-[50px] md:text-[64px] md:leading-[77px]'>Premium Web Hosting for Your Website</h1>
                                <p className='text-[#808080] text-base font-Inter font-normal mt-4 sm:mt-6 md:mt-7 lg:mt-[34px] tracking-[0.8px] max-w-[448px] leading-7'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                                <div className='flex max-xs:flex-col mt-8 sm:mt-10 md:mt-12 lg:mt-[60px] gap-4 xs:gap-6'>
                                    <button className='bg-[#B00000] rounded-lg sm:shadow-[0_0_64px_0_rgba(176,0,0,0.30)] text-white text-sm font-Poppins font-normal py-3 px-[13px]'>Create an Account</button>
                                    <button className='bg-transparent border border-black rounded-lg  text-black text-sm font-Poppins font-normal py-3 px-[13px]'>Choose your plan</button>
                                </div>
                            </div>
                        }
                        {
                            first === "tab2" && <div>
                                <h2 className='text-[#2E2E2E] font-Poppins font-bold text-[42px] sm:text-[50px] md:text-[64px] md:leading-[77px]'>Lorem ipsum dolor sit amet consectetur.</h2>
                                <p className='text-[#808080] text-base font-Inter font-normal mt-4 sm:mt-6 md:mt-7 lg:mt-[34px] tracking-[0.8px] max-w-[448px] leading-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quaerat corrupti delectus </p>
                                <div className='flex max-xs:flex-col mt-8 sm:mt-10 md:mt-12 lg:mt-[60px] gap-4 xs:gap-6'>
                                    <button className='bg-[#B00000] rounded-lg sm:shadow-[0_0_64px_0_rgba(176,0,0,0.30)] text-white text-sm font-Poppins font-normal py-3 px-[13px]'>Create an Account</button>
                                    <button className='bg-transparent border border-black rounded-lg  text-black text-sm font-Poppins font-normal py-3 px-[13px]'>Choose your plan</button>
                                </div>
                            </div>
                        }
                        {
                            first === "tab3" && <div>
                                <h2 className='text-[#2E2E2E] font-Poppins font-bold text-[42px] sm:text-[50px] md:text-[64px] md:leading-[77px]'>Adipisicing elit. Magnam, sint. Non,</h2>
                                <p className='text-[#808080] text-base font-Inter font-normal mt-4 sm:mt-6 md:mt-7 lg:mt-[34px] tracking-[0.8px] max-w-[448px] leading-7'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                                <div className='flex max-xs:flex-col mt-8 sm:mt-10 md:mt-12 lg:mt-[60px] gap-4 xs:gap-6'>
                                    <button className='bg-[#B00000] rounded-lg sm:shadow-[0_0_64px_0_rgba(176,0,0,0.30)] text-white text-sm font-Poppins font-normal py-3 px-[13px]'>Create an Account</button>
                                    <button className='bg-transparent border border-black rounded-lg  text-black text-sm font-Poppins font-normal py-3 px-[13px]'>Choose your plan</button>
                                </div>
                            </div>
                        }
                        {
                            first === "tab4" && <div>
                                <h2 className='text-[#2E2E2E] font-Poppins font-bold text-[42px] sm:text-[50px] md:text-[64px] md:leading-[77px]'>Premium Web Hosting for Your Website</h2>
                                <p className='text-[#808080] text-base font-Inter font-normal mt-4 sm:mt-6 md:mt-7 lg:mt-[34px] tracking-[0.8px] max-w-[448px] leading-7'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                                <div className='flex max-xs:flex-col mt-8 sm:mt-10 md:mt-12 lg:mt-[60px] gap-4 xs:gap-6'>
                                    <button className='bg-[#B00000] rounded-lg sm:shadow-[0_0_64px_0_rgba(176,0,0,0.30)] text-white text-sm font-Poppins font-normal py-3 px-[13px]'>Create an Account</button>
                                    <button className='bg-transparent border border-black rounded-lg  text-black text-sm font-Poppins font-normal py-3 px-[13px]'>Choose your plan</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className='flex justify-center lg:justify-end mt-4'>
                    <div className='relative max-md:mx-5 lg:mr-10 xl:mr-0'>
                        <img className='' src={headerimg} alt='header image'  placeholder='blur'/>
                        <span className=' absolute left-0 bottom-[33%] -translate-x-2 sm:-translate-x-4 md:-translate-x-6'><HeaderLeftSvg /></span>
                        <span className=' absolute right-0 top-[13%] translate-x-2 sm:translate-x-4 md:translate-x-6'><HeaderRightFirstSvg /></span>
                        <span className=' absolute right-0 bottom-[10%] translate-x-3 sm:translate-x-5 md:translate-x-6'><HeaderRight2Svg /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
