import { useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';
import Info from './Component/Info';
import BridelPolki from './Component/BridelPolki';
import Categories from './Component/Categories';
import About from './Component/About';
import { Link } from 'react-router-dom';
import Search from '../Common-Components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearchTab } from '../featureSlice/searchSlice/searchSlice';
import useDropdownAnimation from '../hooks/useDropdownAnimation';
import DropdownMenu from '../components/DropdownMenu';
import gsap from "gsap"
import Faq from './Component/Faq';
import Carousel  from '../Carousel'
import slide from '../../src/constants'
import slide2 from '../constant2'

function HeroMain() {

    const searchtab = useSelector((state) => state.search.searchtab)
    const dispatch = useDispatch()
    const searchbtn = () => {
        dispatch(toggleSearchTab())
    }

    const marqueeRef = useRef(null);

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
        <>
        <div className=' overflow-x-hidden'>

        

            <img src="https://emcgtdx36wv.exactdn.com/storage/2024/10/New-Home-New-Desktop-Banner.jpg?lossy=0&webp=90&avif=90&ssl=1" alt="" className='relative md:block hidden' />
            <img src="https://emcgtdx36wv.exactdn.com/storage/2024/10/New-Home-New-Mobile-Banner.jpg?lossy=0&webp=90&avif=90&ssl=1" width="900px" alt="" className='relative  md:hidden block' />

            <header className=" absolute top-0 ">
                <div className=" text-center bg-black p-[2px] ">

                    <marquee ref={marqueeRef} behavior="scroll" scrollamount="6" direction="left"
                        onMouseOver={handlemouseOver}
                        onMouseOut={handlemouseOut}
                        className=" md:mx-16 mx-3 text-sm text-white">
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
                <div className="w-full flex md:justify-center justify-between ">
                    <div className="w-[90%] mt-2 flex flex-col md:items-center items-start md:px-0 px-4">

                        <img src="https://emcgtdx36wv.exactdn.com/storage/2024/02/KhwaahishDiamondsLogo.png?lossy=0&webp=90&avif=90&ssl=1" className=" text-center md:w-[160px] w-[140px] filter-white" alt="" />
                        <div className=" md:block hidden">
                            <div className=" flex justify-center mt-3">
                                <ul className=" flex px-5 gap-8 ">
                                    <li
                                            ref={linkRef}
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            className=" cursor-pointer  text-[16px] text-white uppercase  tracking-wider font-thin relative group">High Jewellery <span className=" absolute cursor-pointer left-0 right-0 bottom-0 top-8 h-[3px] bg-white scale-x-0 group-hover:scale-x-100  " />
                                        </li>
                                        

                                    <li className=" text-bigilla text-[16px] text-white uppercase  tracking-wider font-thin relative group">Queen of Hearts
                                        <span className=" absolute left-0 right-0 bottom-0 top-8 h-[3px] bg-white scale-x-0 group-hover:scale-x-100  " />
                                    </li>
                                    
                                    <li className="  text-[16px] text-white uppercase  tracking-wider font-thin relative group"><Link to="/story" >Our Story</Link> 
                                            <span className=" absolute left-0 right-0 bottom-0 top-8 h-[3px] bg-white scale-x-0 group-hover:scale-x-100  " />
                                        </li>
                                    <li className=" text-[16px] text-white uppercase  tracking-wider font-thin relative group">Media
                                        <span className=" absolute left-0 right-0 bottom-0 top-8 h-[3px] bg-white scale-x-0 group-hover:scale-x-100  " />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className=" flex gap-4 items-center md:px-0 px-4">
                        <FaSearch className=" text-[17px] text-white cursor-pointer"
                            onClick={searchbtn}
                        />
                        <FaLocationDot className=" text-[17px] text-white" />
                        <GiHamburgerMenu className=" md:hidden block text-white" />
                    </div>
                </div>
                {dropdownOpen && <DropdownMenu  ref={dropdownRef} onMouseEnter={cancelClose} onMouseLeave={handleMouseLeave} />}

            </header>


            {/* TODO:for search */}

            {searchtab && <Search />}
            
            <Info />
            {/* <JewelleryCollection /> */}
            <Carousel slide={slide}/>
            <Carousel slide={slide2}/>
            {/* <QueenOFHearts /> */}
            <BridelPolki />
            <Categories />
            <About />
            <Faq/>
        </div>

        </>
    )
}

export default HeroMain