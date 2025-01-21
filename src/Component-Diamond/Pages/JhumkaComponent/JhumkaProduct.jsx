import { useEffect, useRef, useState } from "react";
import { GoDotFill } from "react-icons/go"
import { FaDotCircle } from "react-icons/fa";


function JhumkaProduct() {

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
    
    const [current, setcurrent] = useState(0)
    const [current2, setcurrent2] = useState(0)

    const scrollRef = useRef(null);
    const scrollRef2 = useRef(null);

    const handleDotClick = (index) => {
        setcurrent2(index);
        if (scrollRef2.current) {
            const dotWidth = scrollRef2.current.clientWidth / 3;
            scrollRef2.current.scrollTo({ left: dotWidth * index, behavior: 'smooth' });
        }
    };



    const handleDotClick2 = (index) => {
        setcurrent(index);
        if (scrollRef.current) {
            const dotWidth = scrollRef.current.clientWidth / 1;
            scrollRef.current.scrollTo({ left: dotWidth * index, behavior: 'smooth' });
        }
    };


    useEffect(() => {
        let currentIndex1 = 0;
        const interval1 = setInterval(() => {
            currentIndex1 = (currentIndex1 + 3) % ProductItem.length;
            handleDotClick(currentIndex1);
        }, 4000);
        return () => clearInterval(interval1);
    }, []);




    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % ProductItem.length;
            handleDotClick2(currentIndex);
        }, 4000);
        return () => clearInterval(interval);
    }, []);




    return (
        <>
            <div className=' mt-[60px] mb-7 flex flex-col items-center'>
                <h1 className=' text-[19px]'>You May Also Like</h1>
            </div>

            <div className=" md:hidden block">
                <div className=' w-[100%] overflow-x-auto px-10 mb-10 mt-[60px] gap-[50px] flex flex-row no-scrollbar snap-x' ref={scrollRef} >
                    {ProductItem.map((item, index) => (
                        <div key={index} className="md:min-w-[450px] min-w-[100%] border p-2 flex flex-col items-center gap-4 snap-center " >
                            <img src={item.img} className="w-[99%]" alt="" />
                            <div className=" w-[100%]">
                                <p className=" text-[14px]">{item.title}</p>
                                <div className=' flex justify-between items-center text-[#b2872d] my-1'>
                                    <p className=' text-[13px]'>
                                        SKU: <span className=''>{item.prductID}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className=" md:block hidden">
                <div className=' w-[100%] overflow-x-auto px-10 mb-10 mt-[60px] gap-[50px] flex flex-row no-scrollbar snap-x' ref={scrollRef2} >
                    {ProductItem.map((item, index) => (
                        <div key={index} className="md:min-w-[450px] min-w-[100%] border p-2 flex flex-col items-center gap-4 snap-center " >
                            <img src={item.img} className="w-[99%]" alt="" />
                            <div className=" w-[100%]"> 
                                <p className=" text-[14px]">{item.title}</p>
                                <div className=' flex justify-between items-center text-[#b2872d] my-1'>
                                    <p className=' text-[13px]'>
                                        SKU: <span className=''>{item.prductID}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className=" md:block hidden">
                <div className="flex my-5 gap-2 justify-center items-center ">
                    {ProductItem.map((_, i) => (
                        <button className="slide-transition" onClick={() => handleDotClick(i)} key={i}>{i === current2 ? <FaDotCircle /> : <GoDotFill />}</button>
                    ))}
                </div>
            </div>





            <div className=" md:hidden block">
                <div className="flex my-5 gap-2 justify-center items-center ">
                    {ProductItem.map((_, i) => (
                        <button className="slide-transition" onClick={() => handleDotClick2(i)} key={i}>{i === current ? <FaDotCircle /> : <GoDotFill />}</button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default JhumkaProduct