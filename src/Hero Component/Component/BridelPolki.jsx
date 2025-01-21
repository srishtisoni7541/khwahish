
import { BsDashLg } from 'react-icons/bs'

function BridelPolki() {

    const policy = [{
        img: "/MainHero/Promise-Sec-Icons-1.svg",
        title: "BIS Hallmarked",
    },
    {
        img: "/MainHero/Promise-Sec-Icons-2.svg",
        title: "Assured time maintanance"
    },
    {

        img: "/MainHero/Promise-Sec-Icons-3.svg",
        title: "Lifetime Exchange"
    },
    {
        img: "/MainHero/Promise-Sec-Icons-4.svg",
        title: "Free 1 year warranty"
    },
    {
        img: "/MainHero/Promise-Sec-Icons-5.svg",
        title: "Different by Design Unique designs with a World"
    },
    {
        img: "/MainHero/Promise-Sec-Icons-6.svg",
        title: "0% Deduction old Gold exchange"
    },
    {
        img: "/MainHero/Promise-Sec-Icons-7.svg",
        title: "Free and insured shipping across India"
    },
    {
        img: "/MainHero/Promise-Sec-Icons-8.svg",
        title: "Personalized Shopping Experience"
    },
    {
        img: "/MainHero/Promise-Sec-Icons-9.png",
        title: "“Natural Diamonds” Certification by International Gemological Laboratories"
    }

    ]

    return (
        <>
            <div className=' flex flex-col justify-center items-center '>
                <div>
                    <h2 className=' flex justify-center items-center gap-4 py-4'>
                        <span ><BsDashLg className='text-[50px] ' /></span>
                        <p className=' text-[30px] tracking-widest'> Bridal Edit</p>
                        <span><BsDashLg className='text-[50px] ' /></span>
                    </h2>
                </div>
                <p className=' md:px-[250px] px-2 text-center text-[#757575] text-[16px] '>At Khwaahish, it is love, luxury, blessings and honor crafted into a grandeur ornament. Our jewellery is a story teller, a reminder of how precious occasions in life can be. It is a legacy to be possessed and passed down from generation to generation. We have curated a collection of pieces that best define traditions, culture and authenticity.</p>


                <div className="w-full flex justify-center items-center md:p-5">
                    <div className='w-[95%] h-[560px]er md:flex md:flex-row flex flex-col md:mx-[1px] mx-auto bg-[#f2f2f2] rounded-[40px]'>

                        <img src="/MainHero/Bridal-Banner-Home-Page.jpg" className='md:rounded-s-[40px] w-[65%]' alt="" />
                        <div className=' w-[35%] flex flex-col justify-center items-center md:py-0 py-7'>
                            <h1  className='md:text-[50px] text-[30px] font-bigilla'>Bridal</h1>
                            <p className='text-[#757575] md:text-[20px] text-[17px] text-center'>Exquisite Jewellery for Life’s Grand Celebrations</p>
                            <button className="mt-2 px-5 py-2 bg-[#b2872d] hover:bg-white hover:text-black hover:border text-white rounded-3xl uppercase">Explore more</button>
                        </div>
                    </div>

                </div>
            </div>




            <div className=' flex flex-col justify-center items-center '>
                <div>
                    <h2 className=' flex justify-center items-center gap-4 py-4'>
                        <span ><BsDashLg className='text-[50px] ' /></span>
                        <p className=' text-[30px] tracking-widest'> Polki Edit</p>
                        <span><BsDashLg className='text-[50px] ' /></span>
                    </h2>
                </div>
                <p className=' md:px-[250px] px-2 text-center text-[#757575] text-[16px]'>Our tribute to one of India’s ancient jewellery craft that is exotic, dreamy & eternally graceful.</p>


                <div className="w-full flex justify-center items-center md:p-5">

                    <div className='w-[95%] h-[560px]er md:flex md:flex-row flex flex-col md:mx-[1px] mx-auto bg-[#f2f2f2] rounded-[40px]'>
                        <img src="/MainHero/Polki-edit-Banner-Home-Page (1).jpg" className='md:rounded-s-[40px] w-[65%]' alt="" />
                        <div className=' w-[35%] flex flex-col justify-center items-center md:py-0 py-7'>
                            <h1 className='md:text-[50px] text-[30px] font-bigilla'>Polki</h1>
                            <p className='text-[#757575] md:text-[20px] text-[17px] text-center'>Gorgeous Uncut Diamond Jewels</p>
                            <button className="mt-2 px-5 py-2 bg-[#b2872d] hover:bg-white hover:text-black hover:border text-white rounded-3xl uppercase">Explore more</button>
                        </div>
                    </div>


                </div>
            </div>





            <div className=' flex flex-col justify-center items-center '>
                <div>
                    <h2 className=' flex justify-center items-center gap-4 py-4'>
                        <span ><BsDashLg className='text-[50px] ' /></span>
                        <p className=' text-[30px] tracking-widest'>Spotlight</p>
                        <span><BsDashLg className='text-[50px] ' /></span>
                    </h2>
                </div>

                <video width="100%" loop muted autoPlay>
                    <source src="/MainHero/stock-footage-new-delhi-india-september-a-shot-of-an-indian-bride-showing-her-bridal-jewellery-at-her.webm" type="video/mp4" />
                </video>

            </div>


            <div className=' w-[100%] my-10 flex md:flex md:flex-row flex-col '>
                <div className=' md:w-[55%] '>
                    <div className='py-8 flex flex-wrap justify-center  '>
                        {policy.map((item, i) => (
                            <div key={i} className='md:w-[28%] h-[160px] w-[100%] border  flex flex-col justify-center items-center py-4 gap-7'>
                                <img src={item.img} width="90" className=' aspectratio object-contain ' alt="" />
                                <p className=' text-center text-[12px] w-[80%]' >{item.title}</p>
                            </div>
                        ))}
                    </div>

                </div>
                <div className=' md:w-[45%] flex flex-col justify-center items-center'>
                    <h2 className=' flex justify-center items-center gap-4 py-4 '>
                        <span ><BsDashLg className='md:text-[50px] ' /></span>
                        <p className=' md:text-[30px] tracking-widest'>The Khwaahish Promise</p>
                        <span><BsDashLg className='md:text-[50px] ' /></span>
                    </h2>
                    <p className=' text-center text-[#757575] text-[17px] font-light w-[80%]'>Be it a fabulous range of jewellery designs, a world-class finish, a premium shopping experience, the best in class quality control standards or a fair pricing strategy, we have benchmarked high standards because we value your trust & relations, and strive to be your favourite personalised family jeweller for all occasions.</p>
                </div>

            </div>
            <div className=' flex flex-col justify-center items-center'>
                <div>
                    <h2 className=' flex justify-center items-center gap-2 '>
                        <span ><BsDashLg className='text-[50px] ' /></span>
                        <p className=' text-[40px] tracking-widest'> Comming Soon</p>
                        <span><BsDashLg className='text-[50px] ' /></span>
                    </h2>
                </div>



                <div className=' w-[100%] md:flex flex-col md:flex-row justify-center items-center flex md:px-[50px] pt-4 p-0 gap-5'>
                    <img src="/MainHero/commingsoon1.jpg" className='md:w-[65%] w-[100%]' alt="" />
                    <img src="/MainHero/commingsoon2.jpg" className='md:w-[32.5%] w-[100%]' alt="" />
                    <img src="/MainHero/480X250-Live-video-call-banner-copy222.jpg" className='md:w-[110%] w-[100%] md:p-3 m-auto md:hidden block' alt="" />
                </div>

                <img src="/MainHero/commingsoon3.jpg" className='w-[94%] p-3 m-auto md:block hidden' alt="" />
            </div>


            <div className='flex flex-col justify-center items-center my-3'>
                <div>
                    <h2 className=' flex justify-center items-center gap-4 py-4'>
                        <span ><BsDashLg className='md:text-[50px] text-[20px]' /></span>
                        <p className=' md:text-[30px] text-[20px] tracking-widest'>The Khwaahish Store</p>
                        <span><BsDashLg className='md:text-[50px] text-[20px]' /></span>
                    </h2>
                    <p className=' md:px-[250px] px-2 text-center text-[#5b5a5a] text-[18px]'>Khwaahish Diamond Jewellery, Chennai</p>
                    <p className=' md:px-[250px] px-2 text-center text-[#757575] text-[16px] tracking-wider'>You can visit our store to examine our wide collection or connect with us for Customisations, Video Shopping, Door delivery & Payment options. Our Jewellery range starts from 25k and all our products are BIS Hallmarked Certified Natural Diamonds, authenticated by International Labs.</p>
                </div>
            </div>
            <div className=' my-8 md:flex md:flex-row flex flex-col md:w-[99%] md:h-[620px] md:p-10 p-0 m-auto'>
                <img src="/MainHero/Location.jpg" alt="" className=' md:w-[50%] w-[100%] md:h-auto h-[300px]' />
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6012.809105754044!2d80.256799!3d13.031309!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b22f01d055%3A0x4fceee85310a87f!2sKhwaahish%20Diamond%20Jewellery!5e1!3m2!1sen!2sin!4v1734524223445!5m2!1sen!2sin" className=' md:w-[50%] w-[100%] md:h-auto h-[300px]'></iframe>
            </div>



        </>
    )
}

export default BridelPolki