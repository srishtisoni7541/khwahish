
import { useState, useEffect } from "react";
import { BsDashLg } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

function JewelleryCollection() {
    const [currentIndex, setCurrentIndex] = useState(1);

    const slide = [
        {
            img: "/MainHero/Noor-Banner-Home-Page.jpg",
            title: "Noor",
            description: "stunning partywear jewellery"
        },
        {
            img: "/MainHero/Aasai-Banner-Home-Pagemodel 2.jpg",
            title: "Aasai",
            description: "Exciting south jewellery"
        },
        {
            img: "/MainHero/Heer-Banner-Home-Page model 3.jpg",
            title: "Heer",
            description: " Exquisite Solitaire Jewellery "
        }
    ];

    
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slide.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slide.length) % slide.length);
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000); 

        return () => clearInterval(interval); 
    }, []);


    return (
        <div className=' flex flex-col justify-center items-center'>
            <div>
                <h2 className=' flex justify-center items-center gap-4 py-4'>
                    <span ><BsDashLg className='md:text-[50px] text-[30px]' /></span>
                    <p className=' md:text-[30px] text-[20px] tracking-widest '> High Jewellery Collection</p>
                    <span><BsDashLg className='md:text-[50px] text-[30px]' /></span>
                </h2>
            </div>
            <p className=' md:px-[250px] px-2 text-center text-[#757575] text-[16px]'>Our High Jewellery Collection features a unique curation of exotic and exciting jewellery each expertly created. Every design is an enduring example of elegance and is meant to make you feel genuinely remarkable.</p>


            <div className="flex flex-col items-center justify-center w-[90%] md:py-6 py-4 ">
                <div className="md:flex md:w-[100%] bg-gray-100 rounded-lg overflow-hidden">
                    <img
                        src={slide[currentIndex].img}
                        className="md:w-[70%] w-full h-2/3 object-cover"
                    />
                    <div className="md:w-[30%] md:flex md:flex-col flex flex-col items-center justify-center md:justify-center md:items-center p-4">
                        <h2 className="text-xl font-semibold">{slide[currentIndex].title}</h2>
                        <p className="text-gray-600">{slide[currentIndex].description}</p>
                        <button className="mt-2 px-5 py-2 w-40 bg-[#b2872d] hover:bg-white hover:text-black hover:border text-white rounded-3xl uppercase">Explore more</button>
                    </div>
                </div>
                
            </div>


            <div className="flex mb-10 gap-2 justify-center items-center">
                <FaAngleLeft className="text-[30px] cursor-pointer" onClick={handlePrev} />
                {slide.map((_, index) => (
                    <GoDotFill key={index} onClick={() => handleDotClick(index)} className={`cursor-pointer `} />
                ))}
                <FaAngleRight className="text-[30px] cursor-pointer" onClick={handleNext} />
            </div>

        </div>


    )
}

export default JewelleryCollection