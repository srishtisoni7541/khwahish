import { useState } from 'react'
import { GoDash } from 'react-icons/go';
import { HiMiniChevronDoubleRight } from 'react-icons/hi2';
import { IoLogoWhatsapp } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Product() {
    const [Selectedoption, setSelectedoption] = useState(1)

    const handleOptionChange = (option) => {
        setSelectedoption(option)
    }

    const ProductItem = [
        {
            img: "/Diamond/KER4682.jpg",
            title: "Dazzling Dreams Diamond Jhumka Earrings",
            prductID: "KER4641",
            aTag: "/jhumka"
        }, {
            img: "/Diamond/KER5348 (1).jpg",
            title: "Princess Possession Diamond Earrings",
            prductID: "KER5348",
            aTag: "/princess-possession-diamond-earrings"
        },
        {
            img: "/Diamond/KER5392(2).jpg",
            title: "Stylish Splendour Diamond Earrings",
            prductID: "KER5392",
            aTag: ""
        },
        {
            img: "/Diamond/KER4332(3).jpg",
            title: "Scintillating Drops Diamond Earrings",
            prductID: "KER4332",
            aTag: ""
        },
        {
            img: "/Diamond/KER4869(4).jpg",
            title: "True Beauty Diamond Studs",
            prductID: "KER4869",
            aTag: ""
        },
        {
            img: "/Diamond/KER4882(5).jpg",
            title: "Flight of Fantasy Diamond Earrings",
            prductID: "KER4882",
            aTag: ""
        },
    ]

    const ProductItem2 = [
        {
            img: "/Diamond/KER4840page2.1.jpg",
            title: "Dainty and Enchanting Diamond Studs",
            prductID: "KER4840",
            aTag: ""
        }, {
            img: "/Diamond/KER5233page2.2.jpg",
            title: "Radiating Elegance Diamond Earrings",
            prductID: "KER5233",
            aTag: ""
        },
        {
            img: "/Diamond/KER3553page2.3.jpg",
            title: "Resplendent Radiance Diamond Earrings",
            prductID: "KER3553",
            aTag: ""
        },
        {
            img: "/Diamond/KER4860page2,4.jpg",
            title: "Regal Diamond Earrings",
            prductID: "KER4860",
            aTag: ""
        },
        {
            img: "/Diamond/KER4374page2.5.jpg",
            title: "Gorgeous Chandelier Red Carpet Earrings",
            prductID: "KER4374",
            aTag: ""
        },
        {
            img: "/Diamond/KER4730page2.6.jpg",
            title: "Breathtaking Stunner Diamond Earrings",
            prductID: "KKER4730",
            aTag: ""
        },
    ]


    return (
        <>

            {/* TODO:DIAMOND Shop Gray bar */}

            <div className='w-full h-[60px] bg-[#f7f7f7] my-4 flex items-center pl-[55px]'>
                <p className='text-[12px] text-[#b2872d] flex items-center text-wrap'>Best Diamond Shop in Chennai <HiMiniChevronDoubleRight /> <span className='text-black text-[13px]'>Diamond Earring</span></p>
            </div>

            {/* TODO: Earring photo section */}

            <div className='w-full md:flex md:flex-row flex flex-col-reverse justify-center items-center md:px-[60px] gap-8'>
                <div className='md:w-[50%] w-full md:px-0 px-[60px]  flex flex-col justify-center items-center'>
                    <h1 className=' flex justify-center items-center text-[30px] text-nowrap'><GoDash className=' text-[50px]' />Diamond Earrings<GoDash className=' text-[50px]' /></h1>
                    <p className='w-[95%] text-gray-400 text-center tracking-wider text-[18px]'>A fashion statement like no other, our diamond earrings are created with the sole purpose of making you look your absolute best.</p>
                </div>
                <div>
                    <img src="\Diamond\CATEGORY_EARRING_IMAGE_HEADER.jpg" alt="" />
                </div>
            </div>



            <div className=' md:flex flex md:flex-row flex-col md:justify-between px-[50px] py-5 my-[50px] md:gap-0 gap-[50px]'>
                <select className=' border-b-2 px-[20px] gap-7 py-2 border-[#b2872d] w-[160px] outline-none' >
                    <option value="">Select Style</option>
                    <option value="Drop">Drop(56)</option>
                    <option value="Balis">Balis(46)</option>
                    <option value="Jhumkas">Jhumkas(37)</option>
                </select>

                <p className=' text-gray-400'>Earrings: 417 items</p>
            </div>


            {Selectedoption === 1 ? (
                <div className=' md:px-[60px] px-6 flex flex-wrap gap-7'>
                    {ProductItem.map((item, i) => (
                        <div key={i} className=' border p-2 mb-[50px] w-[443px] '>
                            <Link to={item.aTag}>
                                <img src={item.img} loading='lazy' width="420px" className=' text-center hover:scale-105 mx-auto transition-all ease-in-out' alt="" />
                            </Link>
                            <p className=' my-4 text-gray-400 p-2'>{item.title}</p>
                            <div className=' flex justify-between items-center text-[#b2872d] px-2'>
                                <p className=' text-[13px] gap-2'>
                                    SKU: <span className=''>{item.prductID}</span>
                                </p>
                                <IoLogoWhatsapp className=' text-[30px] text-green-500' />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className=' md:px-[60px] px-6 flex flex-wrap gap-7'>
                    {ProductItem2.map((item, i) => (
                        <div key={i} className=' border p-2 mb-[50px] w-[443px] '>
                            <img src={item.img} loading='lazy' width="420px" className=' text-center hover:scale-105 mx-auto transition-all ease-in-out' alt="" />
                            <p className=' my-4 text-gray-400 p-2'>{item.title}</p>
                            <div className=' flex justify-between items-center text-[#b2872d] px-2'>
                                <p className=' text-[13px] gap-2'>
                                    SKU: <span className=''>{item.prductID}</span>
                                </p>
                                <IoLogoWhatsapp className=' text-[30px] text-green-500' />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className=' w-full flex justify-center my-5 gap-2 text-[#b2872d]'>
                <button className={`border border-[#b2872d] px-2 py-1 hover:text-black ${Selectedoption === 1 ? "bg-[#b2872d] text-white hover:text-white" : ""}`} onClick={() => handleOptionChange(1)}>1</button>
                <button className={`border border-[#b2872d] px-2 py-1 hover:text-black ${Selectedoption === 2 ? "bg-[#b2872d] text-white hover:text-white" : ""}`} onClick={() => handleOptionChange(2)}>2</button>
            </div>

        </>
    )
}

export default Product