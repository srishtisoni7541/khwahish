import React from 'react'
import { certifications, khwaahishInnerView, noorAdCampaignVideo, noorLandingHeroBanner, noorLandingHeroBannerMobile, testimonials} from '../constants'
import { slides } from '../constants'
import NoorCarousel from './NoorCarousel'
import CertificationMarquee from './CertificationMarquee'
import TestimonialCarousel from './TestimonialCarousel'
import { hallmarks } from '../constants'


const NoorPage = () => {
  // console.log(hallmarks)
  return (
    <div className='text-sm flex flex-col gap-12 font-gothic'>

{/* SECTION-1 */}
      <div className='flex flex-col items-center gap-[10px] '>
        <img className='hidden md:block' src={noorLandingHeroBanner}/>
        <img className='w-full md:hidden' src={noorLandingHeroBannerMobile}/>
        <h1 className='font-carpethen -mt-10 text-center text-[7rem] leading-[1em] md:text-[12rem]'>Noor</h1>
        <p className=' max-w-[1280px] text-center text-sm font-normal leading-[1.8] tracking-[1.3px] text-gray-500 md:max-w-[80%]'>Striking, radiant, and bold, this partywear collection is a collision of sparkle and glamour. Statement pieces that allow you to reveal your true bolder self by embracing these empowering diamond jewels.</p>

      </div>

{/* SECTION-2 */}
<div className='flex flex-col items-center gap-[.8rem]'>
  <h4 className='before:content-[""] before:h-[1px] before:w-6 before:bg-black before:absolute before:left-0 before:top-[50%] before:translate-x-[-140%] before:translate-y-[-50%]

  after:content-[""] after:h-[1px] after:w-6 after:bg-black after:absolute after:right-0 after:top-[50%] after:translate-x-[140%] after:translate-y-[-50%]

  bg-pink-200 relative max-w-[850px] tracking-[3.36px] text-gray-700 capitalize text-center text-[26px] font-normal leading-[1.4] mb-2 md:max-w-[80%]
  md:before:w-14 md:after:w-14'>Jewels at a glance</h4>
  <p className='max-w-[1280px] text-center text-sm font-normal leading-[1.8] tracking-[1.3px] text-gray-500 md:max-w-[80%]'>This collection is a beautiful amalgamation of Striking gemstones, Gold and Diamonds. All designs can be customized as per your requirements.</p>
  {/* insert carousel */}
  <NoorCarousel slides={slides}/>
  {/* <div className='h-[600px] w-full bg-red-500'></div> */}

  <button className='uppercase text-white flex items-center justify-center gap-4 mx-auto mt-10 px-[25px] py-[5px] rounded-3xl bg-[#B2872D] text-lg hover:bg-black  transition-all'><svg id="Layer_1" className='h-7 w-7' viewBox="0 0 512 512"><circle r="256" cx="256" cy="256" shape="true" transform="matrix(1,0,0,1,0,0)" fillOpacity="1" fill="#fff"/><g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)"><path d="m256 .5c-141.11 0-255.5 114.39-255.5 255.5s114.39 255.5 255.5 255.5 255.5-114.39 255.5-255.5-114.39-255.5-255.5-255.5zm139.08 260.22-85 85a6.68 6.68 0 0 1 -9.45-9.44l73.65-73.65h-252.64a6.68 6.68 0 0 1 0-13.36h252.67l-73.65-73.65a6.68 6.68 0 1 1 9.45-9.44l85 85.05a6.67 6.67 0 0 1 -.03 9.49z" fill="#B2872D" fillOpacity="1" data-original-color="#000000ff" stroke="none" strokeOpacity="1"/></g></svg> View Collection</button>
</div>

{/* SECTION-3 */}
<div className='mt-5 flex flex-col items-center gap-5'>
<h4 className='before:content-[""] before:h-[1px] before:w-6 before:bg-black before:absolute before:left-0 before:top-[50%] before:translate-x-[-140%] before:translate-y-[-50%]

  after:content-[""] after:h-[1px] after:w-6 after:bg-black after:absolute after:right-0 after:top-[50%] after:translate-x-[140%] after:translate-y-[-50%]

  bg-pink-200 relative text-gray-700 capitalize text-center text-3xl tracking-wider md:max-w-[80%]
  md:before:w-14 md:after:w-14'>Our Ad Campaign</h4>
  <video className='w-full' autoPlay muted loop src={noorAdCampaignVideo}></video>
</div>


{/* SECTION-4 */}
<div className='flex justify-center'>

  <div className=' md:grid md:grid-cols-[50%,50%] -mt-1 max-w-[90%] flex flex-col-reverse items-center gap-4 '>

  


{/* GRID */}
<div className=' flex flex-wrap justify-items-stretch gap-x-0 gap-y-0 w-full h-full items-stretch md:grid md:grid-cols-hallmark '>
  {hallmarks.map((hallmark,index)=>{
    return <div key={index} className={`${index % 2 !== 0 ? "bg-gray-100" : "white"} flex flex-col justify-center items-center md:p-8 p-5 text-center border border-gray-200 border-solid flex-1 basis-1/2`}>
    <img className='object-contain  h-12  object-center mb-[8px]' src={hallmark.imageUrl}/>
    <span className='text-[10px] text-center leading-[1.3]'>{hallmark.name}</span>
    </div>
  })}
  
</div>
  {/* TExt */}
  <div className=' flex gap-4 flex-col items-center'>
  <h4 className='before:content-[""] before:h-[1px] before:w-6 before:bg-black before:absolute before:left-0 before:top-[50%] before:translate-x-[-140%] before:translate-y-[-50%]

  after:content-[""] after:h-[1px] after:w-6 after:bg-black after:absolute after:right-0 after:top-[50%] after:translate-x-[140%] after:translate-y-[-50%]

  bg-pink-200 relative text-gray-700 capitalize text-center text-3xl tracking-wider md:max-w-[80%]
  md:before:w-14 md:after:w-14'>The Khwaahish Promise</h4>
  <p className='w-11/12 text-balance text-gray-500 text-center md:max-w-[80%]

  max-w-[1280px]text-sm font-normal leading-[1.8] tracking-[1.3px]'>Be it a fabulous range of jewellery designs, a world-class finish, a premium shopping experience, the best in class quality control standards or a fair pricing strategy, we have benchmarked high standards because we value your trust & relations, and strive to be your favourite personalised family jeweller for all occasions.</p>
  </div>


</div>
</div>


{/* SECTION-5 */}
<div className='relative h-[343px] -mt-7 md:h-[508px] w-full'>
  <img className='h-full w-full object-cover object-center' src={khwaahishInnerView}/>
  <div className='flex flex-col justify-center items-center gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00000099] h-4/6 w-11/12 md:h-3/6 md:w-2/3'>

  <h2 className='uppercase text-center text-wrap text-[40px] leading-[3rem] text-white'>
  Visit our store now to view this collection
  </h2>

  <div className='flex gap-2'>
  <div className='h-10 w-10 bg-yellow-300'>
  logo
</div><div className='h-10 w-10 bg-yellow-300'>
  logo
</div><div className='h-10 w-10 bg-yellow-300'>
  logo
</div>
  </div>



  </div>
</div>

{/* Section-6 */}
<div className='flex flex-col items-center gap-2'>
  <h4 className='w-10/12 text-gray-700 capitalize text-center text-xl tracking-wider md:max-w-[80%]'>Khwaahish means Desire - a Desire to be Enchanted by all things Precious & Beautiful.</h4>
  <p className='max-w-[600px] text-center text-sm font-normal leading-[1.8] tracking-[1.3px] text-gray-500 md:max-w-[80%]'>Since 2003, our brand – Khwaahish - has become Chennai’s premium destination for Natural-Diamond Jewellery designed with passion and high level of craftsmanship. We strive to nurture strong bonds with our clients with an unmatched Shopping Experience and our unparalleled focus on expectational product designs, making us our customer’s favourite Diamond Jeweller. Explore our collection and experience a world of Diamond Jewellery, truly Different by Design.</p>
</div>

{/* SECTION-7 */}
<div className='flex flex-col items-center gap-4 bg-gray-100 py-8 -mt-3'>
  <span className='max-w-[1280px] text-center text-sm font-normal leading-[1.8] tracking-[1.3px] text-gray-500 md:max-w-[80%]'>All our jewels are BIS Hallmarked and studded with natural diamonds certified by International Gemmological Institutes.</span>
  <CertificationMarquee slides={certifications} options={{ loop: true }}/>
  <button className='text-white flex items-center justify-center gap-4 mx-auto px-10 h-10 rounded-3xl bg-[#B2872D] hover:bg-black  transition-all'>About Us</button>
</div>

{/* SECTION-8 */}
<div className='flex gap-6 flex-col items-center h-96 w-full '>
  <div className='w-max flex justify-center items-end gap-4'>
    <img className='h-[60px] w-[60px] md:h-[100px] md:w-[100px]' src="https://emcgtdx36wv.exactdn.com/storage/2023/06/quotation.svg" alt="" />
    <h4 className='relative tracking-[4px] text-xl text-gray-500
    
     md:after:content-[""] md:after:h-[1px] md:after:w-14 md:after:bg-black md:after:absolute md:after:right-0 md:after:top-[70%] md:after:translate-x-[120%] md:after:translate-y-[-50%]'>Customer Testimonials</h4>
  </div>

  <TestimonialCarousel slides={testimonials} options={{ loop: true }}/>
</div>
















    </div>
  )
}

export default NoorPage
