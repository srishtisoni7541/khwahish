import { useEffect, useRef, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCart } from "react-icons/io";
import { Link } from 'react-router-dom';
import Search from './Common-Components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearchTab } from './featureSlice/searchSlice/searchSlice';
import useDropdownAnimation from './hooks/useDropdownAnimation';


import gsap from "gsap"
import DropdownMenu from './components/DropdownMenu';

function HeaderNav({ toponbar }) {

    const searchtab = useSelector((state) => state.search.searchtab)
    const dispatch = useDispatch()

    const searchbtn = () => {
        dispatch(toggleSearchTab())
    }

    const marqueeRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handlemouseOver = () => {
        if (marqueeRef.current) {
            marqueeRef.current.stop()
        }
    }

    const handlemouseOut = () => {
        if (marqueeRef.current) {
            marqueeRef.current.start()
        }
    }

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);

        } else {
            setIsVisible(false);

        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);




    const dropdownRef = useRef()
    
    const linkRef = useRef()

    const refTimeout = useRef()

    const [dropdownOpen, setDropdownOpen] = useState(false)



    const handleMouseEnter = (e) => {
        clearTimeout(refTimeout.current)
        setDropdownOpen(true)
    }

    const handleMouseLeave = (e) => {
        if (dropdownRef.current) {
            refTimeout.current = setTimeout(() => {
                gsap.to(dropdownRef.current, {
                    scaleY: 0,
                    duration: 0.2,
                    opacity: 0,
                    ease: "power2.inOut",
                    onComplete: () => setDropdownOpen(false)
                })
            }, 100)
        }
    }

    const cancelClose = () => {
        clearTimeout(refTimeout.current)
    }

    useDropdownAnimation(dropdownOpen, dropdownRef)



    return (
        < div className='relative' >

            {/* TODO:Shop button */}
            <div className=' relative h-[100%] w-full'>
                <button className='flex items-center justify-center bg-[#b2872d] w-[130px] h-[48px] gap-1 fixed top-[310px] right-[-46px] z-20 transform rotate-90 hover:bg-white text-white hover:text-[#b2872d] border border-[#b2872d] transition-colors duration-100 ease-in'>
                    <IoIosCart className='text-[22px]'/>
                    <p className='text-[18px]'>eshop</p>
                </button>
            </div>

            <div className={`${toponbar}`}>

                <header className=' w-full bg-black md:flex md:flex-row flex flex-col justify-center items-center md:static sticky top-0 z-40'>

                    <div className='w-[200px] '><h1 className='md:text-white text-black md:bg-black bg-white md:w-[100px] w-full flex items-center justify-center py-1 pl-[10px] md:ml-10 md:mr-2 mr-0 text-nowrap'> <Link to="/">Visit Brand Website</Link> </h1></div>
                    <marquee ref={marqueeRef} behavior="scroll" scrollamount="6" direction="left"
                        onMouseOver={handlemouseOver}
                        onMouseOut={handlemouseOut}
                        className=" text-sm text-white">
                        We Ship Worldwide | Free Shipping Across India. For further details,
                        Please call:
                        <a href="tel:+91-9876543210" className="text-white">
                            +238453853{" "}
                        </a>{" "}
                        | We design, manufacture & retail jewellery using NATURAL DIAMONDS
                        only | All our Jewels are BIS Hallmarked & Diamonds are ethically
                        sourced & certified by world-renowned Gemological Institutes.
                    </marquee>
                </header>

                {/* TODO:nav bar */}



                <nav className=' md:static sticky top-[52px] z-20'>
                    <div className="w-full flex md:justify-center md:px-0 px-[20px] bg-white justify-between md:py-0 py-1">
                        <div className="w-[90%] mt-2 flex flex-col md:items-center  items-start">
                            <img src="\Diamond\KhwaahishDiamondsLogo.webp" className=' md:w-[160px] w-[130px]' alt="" />

                            <div className='md:block hidden'>
                                <div className=" flex justify-center mt-3">
                                    <ul className=" flex px-5 gap-8">

                                        <li
                                            ref={linkRef}
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            className="cursor-pointer text-[17px] text-black uppercase  tracking-wider relative group">High Jewellery <span className=" absolute cursor-pointer left-0 right-0 bottom-0 top-8 h-[3px] bg-black scale-x-0 group-hover:scale-x-100  " />
                                        </li>
                                        <li className=" text-[17px] text-black uppercase  tracking-wider relative group">Queen of Hearts
                                            <span className=" absolute left-0 right-0 bottom-0 top-8 h-[3px] bg-black scale-x-0 group-hover:scale-x-100  " />
                                        </li>
                                        <li className=" text-[17px] text-black uppercase  tracking-wider relative group"><Link to="/story" >Our Story</Link> 
                                            <span className=" absolute left-0 right-0 bottom-0 top-8 h-[3px] bg-black scale-x-0 group-hover:scale-x-100  " />
                                        </li>
                                        <li className=" text-[17px] text-black uppercase  tracking-wider relative group">Media
                                            <span className=" absolute left-0 right-0 bottom-0 top-8 h-[3px] bg-black scale-x-0 group-hover:scale-x-100  " />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className=" flex gap-4 items-center">
                            <FaSearch className=" md:text-[17px] text-[20px] text-black cursor-pointer"
                                onClick={searchbtn}
                            />
                            <a href="https://maps.app.goo.gl/YgRjEDEcbkYncxmC9" target="_blank" rel="noopener noreferrer">
                                <FaLocationDot className=" md:text-[17px] text-[20px] text-black" />
                            </a>
                            <GiHamburgerMenu className='md:hidden block md:text-[17px] text-[20px]' />
                        </div>
                    </div>
                </nav>
            </div>
            {/* TODO:Hidden NavBar */}

            {isVisible && (
                <nav className=' top-0 fixed z-20 md:block hidden'>
                    <div className=" text-center bg-black p-[2px] sticky ">

                        <marquee ref={marqueeRef} behavior="scroll" scrollamount="6" direction="left"
                            onMouseOver={handlemouseOver}
                            onMouseOut={handlemouseOut}
                            className=" mx-16 text-sm text-white">
                            We Ship Worldwide | Free Shipping Across India. For further details,
                            Please call:
                            <a href="tel:+91-9876543210" className="text-white">
                                +238453853{" "}
                            </a>{" "}
                            | We design, manufacture & retail jewellery using NATURAL DIAMONDS
                            only | All our Jewels are BIS Hallmarked & Diamonds are ethically
                            sourced & certified by world-renowned Gemological Institutes.
                        </marquee>

                    </div>
                    <div className=" w-full flex justify-center bg-slate-100">
                        <div className="w-[90%] mb-3 ">

                            <div className=" flex justify-center mt-3">
                                <ul className=" flex px-5 gap-8">
                                    {/* <Link to="/product">
                                        <li className=" cursor-pointer text-[16px] uppercase  tracking-wider font-thin relative group">High Jewellery
                                            <span className=" absolute cursor-pointer left-0 right-0 bottom-0 top-8 h-[3px] bg-black scale-x-0 group-hover:scale-x-100  " /></li>
                                    </Link> */}

                                    <li
                                            ref={linkRef}
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            className=" cursor-pointer text-[16px] uppercase  tracking-wider font-thin relative group">High Jewellery <span className=" absolute cursor-pointer left-0 right-0 bottom-0 top-8 h-[3px] bg-black scale-x-0 group-hover:scale-x-100  " />
                                        </li>

                                    <li className=" text-[16px] uppercase  tracking-wider font-thin relative group">Queen of Hearts
                                        <span className=" absolute left-0 right-0 bottom-0 top-8 h-[3px] bg-black scale-x-0 group-hover:scale-x-100  " />
                                    </li>
                                    <li className=" text-[16px] uppercase  tracking-wider font-thin relative group">Our Story
                                        <span className=" absolute left-0 right-0 bottom-0 top-8 h-[3px] bg-black scale-x-0 group-hover:scale-x-100  " />
                                    </li>
                                    <li className=" text-[16px] uppercase  tracking-wider font-thin relative group">Media
                                        <span className=" absolute left-0 right-0 bottom-0 top-8 h-[3px] bg-black scale-x-0 group-hover:scale-x-100  " />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className=" flex gap-4 items-center">
                            <FaSearch className=" text-[17px] " />
                            <FaLocationDot className=" text-[17px]" />
                        </div>
                    </div>
                </nav>
            )}


            {/* TODO:Search tab bar */}
            {searchtab && <Search />}
            {dropdownOpen && <DropdownMenu ref={dropdownRef} onMouseEnter={cancelClose} onMouseLeave={handleMouseLeave} />}

        </div>
    )
}

export default HeaderNav

