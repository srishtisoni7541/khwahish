
import { useState, useEffect } from "react";
import { BsDashLg } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

function QueenOFHearts() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slide = [
        {
            img: "/MainHero/QoH1.jpg",
            title: "Festara",
            description: "A Mélange of Precious Gemstones"
        },
        {
            img: "/MainHero/QoH2.jpg",
            title: "Pache",
            description: "Precious Jewellery for Men"
        },
        {
            img: "/MainHero/QoH4.jpg",
            title: "Fazza",
            description: " Gorgeous & Pure Uncut Polki "
        },
        {
            img: "/MainHero/QoH5.jpg",
            title: "Gulz",
            description: " Trendy. Chic and Simply You. "
        },
        {
            img: "/MainHero/Queen-of-hearts3.jpg",
            title: "HeeMeet the Brands That Know How to Turn Heads!r",
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
        }, 4000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className=' flex flex-col justify-center items-center'>
            <div>
                <h2 className=' flex justify-center items-center gap-4 py-4'>
                    <span ><BsDashLg className='text-[50px] ' /></span>
                    <p className=' text-[30px] tracking-widest'> Queen of Hearts</p>
                    <span><BsDashLg className='text-[50px] ' /></span>
                </h2>
            </div>
            <p className=' md:px-[250px] px-0 text-center text-[#757575] text-[16px]'>Chennai’s crown jewel of partywear, where lightweight doesn't mean low on drama</p>



            <div className="flex flex-col items-center justify-center w-[90%] md:py-6 py-4 ">
                <div className="md:flex md:w-[100%] bg-gray-100 rounded-lg overflow-hidden">
                    <img
                        src={slide[currentIndex].img}
                        className="md:w-[70%] w-full h-2/3 object-cover"
                    />
                    <div className="md:w-[30%] md:flex md:flex-col md:justify-center md:items-center p-4 flex flex-col items-center justify-center">
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

export default QueenOFHearts