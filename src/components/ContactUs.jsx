import { HeaderLeftSvg, HeaderRight2Svg, HeaderRightFirstSvg, WhatsappIcon } from './Icons'

const ContactUs = () => {
  return (
    <div className='container max-w-[1252px]  relative w-full px-10 xl:px-0 my-5 sm:my-10 md:my-[57px] pb-5 sm:pb-8 md:pb-[52px]'>
      <div className='w-full flex flex-col bg-[#F7FAFE] rounded-2xl justify-center items-center p-7 xs:p-10 sm:p-12 md:p-16 lg:p-20'>
        <h2 className=' font-Poppins text-base xs:text-2xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold lg:!leading-[88px] text-center max-w-[1024px]'> We re here to make your website awesome.</h2>
        <button className='py-2 hover:scale-95 duration-300 sm:py-3 px-3 sm:px-4 bg-[#B00000] rounded-lg gap-2 text-white text-[10px] xs:text-sm font-Poppins font-normal leading-6 flex items-center mt-2 xs:mt-5 sm:mt-10 mb-2'><span><WhatsappIcon /></span>Get  in touch with us</button>
        <span className=' absolute left-7 xl:left-0 bottom-[20%] xl:-translate-x-4'><HeaderLeftSvg /></span>
        <span className=' absolute right-7 sm:right-2 xl:right-0 bottom-[30%] xl:translate-x-6'><HeaderRight2Svg /></span>
        <span className=' absolute left-[40%] top-0  -translate-x-4'><HeaderRightFirstSvg /></span>
      </div>
    </div>
  )
}

export default ContactUs
