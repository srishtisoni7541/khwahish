import { useEffect, useRef, useState } from 'react';
import { BsDashLg } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

function Categories() {
    const scrollRef = useRef(null);
    const scrollAmount = 1600;
    const [scrollDirection, setScrollDirection] = useState('right');

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handleDotClick = (index) => {
        if (scrollRef.current) {
            const dotWidth = scrollRef.current.clientWidth / 3;
            scrollRef.current.scrollTo({ left: dotWidth * index, behavior: 'smooth' });
        }
    };


    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollDirection === 'right') {
                scrollRight();
                setScrollDirection('left');
            } else {
                scrollLeft();
                setScrollDirection('right');
            }
        }, 8000);
        return () => clearInterval(interval);
    }, [scrollDirection]);


    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <h2 className='flex justify-center items-center gap-4 py-4'>
                        <span><BsDashLg className='md:text-[50px] ' /></span>
                        <p className='md:text-[30px] tracking-widest'>Browse by Categories</p>
                        <span><BsDashLg className='md:text-[50px]' /></span>
                    </h2>
                </div>
            </div>

            <div className="flex overflow-x-auto py-2 md:gap-[55px] gap-6 no-scrollbar" ref={scrollRef}>
                <img src="/MainHero/CATEGORY_BANGLE6.jpg" alt="" width='31%'/>

                <img src="/MainHero/CATEGORY_EARRING2.jpg" alt="" width='31%'/>
                <img src="/MainHero/CATEGORY_NECKLACES4.jpg" alt="" width='31%' />
                <img src="/MainHero/CATEGORY_BRACELET3.jpg" alt="" width='31%' />
                <img src="/MainHero/CATEGORY_RING1.jpg" alt="" width='31%' />
                <img src="/MainHero/CATEGORY_PENDANT5.jpg" alt="" width='31%' />
            </div>

            <div className="flex my-5 gap-2 justify-center items-center">
                <FaAngleLeft className="text-[30px] cursor-pointer" onClick={scrollLeft} />
                <GoDotFill className={`cursor-pointer`} onClick={() => handleDotClick(0)} />
                <GoDotFill className={`cursor-pointer`} onClick={() => handleDotClick(4)} />
                <FaAngleRight className="text-[30px] cursor-pointer" onClick={scrollRight} />
            </div>
        </>
    );
}

export default Categories;