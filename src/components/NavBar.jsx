import logo from '../assets/images/logo.webp'
import { PhoneCallIcon } from "./Icons"
import { useState } from "react"
import { Sling as Hamburger } from 'hamburger-react'
import { NavLink } from "react-router-dom";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const NavBar = () => {
    let NavLinks = "text-black link leading-normal text-sm sm:text-[15px] font-semibold font-Poppins relative after:duration-300 after:absolute after:-bottom-1 transition duration-300 after:w-0 hover:after:w-[80%] after:h-[1px] after:rounded-full after:bg-[#B00000] after:left-[10%]"
    const [isOpen, setOpen] = useState(false);
    if (isOpen) { document.body.classList.add("overflow-hidden") }
    else {
        document.body.classList.remove("overflow-hidden")
    }
    function RemoveOverflow() {
        setOpen(false)
        document.body.classList.remove("overflow-hidden")
    }
    // useGSAP(()=>{
    //     gsap.from(".logo",{y:300,opacity:0})
    //     // gsap.from(".link" ,{stagger: 0.1 ,y:100})
    // })
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").classList.remove("lg:py-10")
            document.getElementById("navbar").classList.add("py-5")
            document.getElementById("nav").classList.add("fixed")
            document.getElementById("nav").classList.add("-translate-x-1/2")
            
        } else {
            document.getElementById("nav").classList.remove("-translate-x-1/2")
            document.getElementById("nav").classList.remove("fixed")
            document.getElementById("navbar").classList.remove("py-5")
            document.getElementById("navbar").classList.add("lg:py-10")
            document.getElementById("navbar").classList.add("py-5")
        }
    }
    return (
        <nav id='nav'  className=" bg-white duration-300 z-40 top-0 left-1/2 w-full">
            <div id='navbar' className="container max-w-[1220px] py-5 lg:py-10 z-40 bg-white">
                <div className="flex w-full justify-between">
                    <div className="flex items-center gap-5 sm:gap-10 lg:gap-16">
                        <a href="http://"><img className="max-sm:max-w-[70px] logo" src={logo} alt="logo" /></a>
                        <p className=" text-black leading-normal text-sm sm:text-[15px] font-semibold font-Poppins relative after:absolute after:-bottom-1 after:w-[80%] after:h-[2px] after:rounded-full after:bg-[#B00000] after:left-[10%]">Our Services</p>
                    </div>
                    <div className={`${isOpen ? "right-0" : "-right-full"} flex items-center gap-[55px] mobileview lg:justify-between lg:ml-20 xl:ml-[135px] lg:w-[60%] xl:w-[67%] z-50`}>
                        <ul className="flex max-lg:flex-col items-center gap-8">
                            <li><NavLink to={"/about"} onClick={RemoveOverflow} className={`${NavLinks}`}>About</NavLink></li>
                            <li><NavLink to={"/blogs"} onClick={RemoveOverflow} className={`${NavLinks}`}>Blog&News</NavLink></li>
                            <li><NavLink to={"/contact"} onClick={RemoveOverflow} className={`${NavLinks}`}>Contact</NavLink></li>
                        </ul>
                        <ul className="flex max-xs:flex-col items-center gap-8 xs:ml-10">
                            <li><NavLink to={"/account"} onClick={RemoveOverflow} className={`${NavLinks}`}>Account</NavLink></li>
                            <li><a onClick={RemoveOverflow} href="tel:+2349067322844" className={`${NavLinks} flex items-center gap-[6px] px-[30px] border-l border-l-[#DAD8D8] hover:after:left-[20%] hover:after:w-[60%]`}><PhoneCallIcon /> +2349067322844</a></li>
                        </ul>
                    </div>
                    <div className='lg:hidden relative z-50 -mr-2'>
                        <Hamburger toggled={isOpen} toggle={setOpen} size={30} rounded distance="md" direction='right' duration={0.5} color='#B00000' />
                    </div>
                </div>
                {isOpen && (
                    <div className='w-full bg-[rgba(0,0,0,0.78)] flex h-full fixed top-0 left-0 z-30'>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar
