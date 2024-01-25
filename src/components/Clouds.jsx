import image1 from '../assets/images/whyus1.webp'
import image2 from '../assets/images/whyus2.webp'
import image3 from '../assets/images/whyus3.webp'
import image4 from '../assets/images/whyus4.webp'
import image5 from '../assets/images/whyus5.webp'
import image6 from '../assets/images/whyus6.webp'
import { CloudsFirstIcons, CloudsFourthIcons, CloudsSecondIcons, CloudsThirdIcons } from './Icons'
const Clouds = () => {
  const Items = [
    { Svg: (<CloudsFirstIcons />), title: "99.9% Uptime", para: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings." },
    { Svg: (<CloudsSecondIcons />), title: "Blazing Fast Web Hosting", para: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings." },
    { Svg: (<CloudsThirdIcons />), title: "Free SSL Certificates", para: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings." },
    { Svg: (<CloudsFourthIcons />), title: "24x7 Friendly Support", para: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings." },
  ]
  return (
    <div className='container max-w-[1280px] py-6 md:py-8 lg:py-10'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 pt-[9px]'>
        <div className='flex flex-col'>
          <h2 className='text-[#18191F] text-4xl sm:text-[40px] md:text-5xl font-extrabold sm:leading-[64px] font-Inter'>True Cloud Web  Hosting</h2>
          <p className='text-[#18191F] text-base md:text-lg font-Inter font-normal !leading-7 sm:!leading-[32px] max-w-[573px] mt-[10px] md:mt-[14px]'>True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 max-xs:mt-2 max-sm:mt-5 max-lg:mt-7 lg:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-5'>
          <div className='flex justify-center lg:justify-end'>
            <img className='duration-300 hover:brightness-200 hover:scale-110' src={image1} alt='Images ' />
          </div>
          <div className='flex justify-center lg:justify-end'>
            <img className='duration-300 hover:brightness-200 hover:scale-110' src={image2} alt='Images ' />
          </div>
          <div className='flex justify-center lg:justify-end'>
            <img className='duration-300 hover:brightness-200 hover:scale-110' src={image3} alt='Images ' />
          </div>
          <div className='flex justify-center lg:justify-end'>
            <img className='duration-300 hover:brightness-200 hover:scale-110' src={image4} alt='Images ' />
          </div>
          <div className='flex justify-center lg:justify-end'>
            <img className='duration-300 hover:brightness-200 hover:scale-110' src={image5} alt='Images ' />
          </div>
          <div className='flex justify-center lg:justify-end'>
            <img className='duration-300 hover:brightness-200 hover:scale-110' src={image6} alt='Images ' />
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 mt-12 sm:mt-16 md:mt-20 lg:mt-[100px] xl:mt-[126px] ml-11 mr-12 gap-10 xl:gap-5">
        {
          Items.map((items, index) => (
            <div key={index} className='flex w-full justify-center'>
              <div className='flex flex-col group justify-center items-center max-w-[259px]'>
                {items.Svg}
                <h2 className='text-black font-bold text-lg md:text-xl mt-[17px] font-Poppins leading-normal text-center'>{items.title}</h2>
                <p className='text-black text-xs font-Poppins text-center font-light mt-1 leading-normal'>{items.para}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Clouds
