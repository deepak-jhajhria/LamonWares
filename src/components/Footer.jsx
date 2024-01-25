import logo from '../assets/images/logofooter.png'
import { HeartIcon } from './Icons'
const Footer = () => {
    return (
        <div className='bg-[#B00000]'>
            <div className='container max-w-[1240px] py-4 sm:py-8 md:py-10 lg:py-[64px]'>
                <div className='grid grid-cols-2 md:grid-cols-4 max-md:pt-5 lg:grid-cols-12 gap-5'>
                    <div className='col-span-2 md:col-span-4 flex flex-col'>
                        <div><img className=' max-sm:max-w-[80px]' src={logo} alt='logo' /></div>
                        <p className='text-[#E6E6E6] font-Inter font-normal text-base leading-8 mt-4 max-w-[296px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                    </div>
                    <div className='col-span-1 lg:col-span-2 mt-3 xs:mt-4'>
                        <ul className='flex flex-col gap-2 xs:gap-3 sm:gap-4 lg:gap-[25px]'>
                            <li className='text-white font-Inter font-bold text-base'>Service</li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 navLinks font-Inter font-normal text-base'>Domain</a></li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 navLinks font-Inter font-normal text-base'>Shared Hosting</a></li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 navLinks font-Inter font-normal text-base'>Cloud Hosting</a></li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 navLinks font-Inter font-normal text-base'>Private Hosting</a></li>
                        </ul>
                    </div>
                    <div className='col-span-1 lg:col-span-2 mt-3 xs:mt-4'>
                        <ul className='flex flex-col gap-2 xs:gap-3 sm:gap-4 lg:gap-[25px]'>
                            <li className='text-white font-Inter font-bold text-base'>Hosting</li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 navLinks font-Inter font-normal text-base'>Cheap Hosting</a></li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 navLinks font-Inter font-normal text-base'>Hosting Wordpress</a></li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 navLinks font-Inter font-normal text-base'>Email Hosting</a></li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 navLinks font-Inter font-normal text-base'>Hosting Unlimited</a></li>
                        </ul>
                    </div>
                    <div className='col-span-1 lg:col-span-2 mt-3 xs:mt-4'>
                        <ul className='flex flex-col gap-2 xs:gap-3 sm:gap-4 lg:gap-[25px]'>
                            <li className='text-white font-Inter font-bold text-base'>Company</li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 navLinks font-Inter font-normal text-base'>About</a></li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 navLinks font-Inter font-normal text-base'>Career</a></li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 navLinks font-Inter font-normal text-base'>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className='col-span-1 lg:col-span-2 mt-3 xs:mt-4'>
                        <ul className='flex flex-col gap-2 xs:gap-3 sm:gap-4 lg:gap-[25px]'>
                            <li className='text-white font-Inter font-bold text-base'>Help</li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 navLinks font-Inter font-normal text-base'>FAQ</a></li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 navLinks font-Inter font-normal text-base'>Help support</a></li>
                        </ul>
                    </div>
                </div>
                <p className='text-white font-Inter text-sm max-sm:text-center sm:text-base font-normal leading-8 mt-10 sm:mt-16 md:mt-20 lg:mt-[100px] mb-4 flex items-center gap-1'>Built by Jeremiah with <span> <HeartIcon /> </span> in Lagos. Copyright {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}

export default Footer
