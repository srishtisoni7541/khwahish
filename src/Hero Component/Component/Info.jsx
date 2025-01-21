
import { useRef } from "react";
export default function Info() {

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

    return (
        <>
            <div className=" md:py-5 py-0">
                <div className=' md:px-[20px] md:py-[50px] px-3 py-4 '>
                    <h1 className=' text-black md:text-[20px] font-normal tracking-[3px] text-center md:leading-3'>Khwaahish means Desire - a Desire to be Enchanted by all things Precious & Beautiful.</h1>
                    <p className=' text-[#757575] md:px-[60px] px-2 py-[20px] text-[16px] tracking-widest text-center  '
                    >Since 2003, our brand – Khwaahish - has become Chennai’s premium destination for Natural-Diamond Jewellery designed with passion and high level of craftsmanship. We strive to nurture strong bonds with our clients with an unmatched Shopping Experience and our unparalleled focus on expectational product designs, making us our customer’s favourite Diamond Jeweller. Explore our collection and experience a world of Diamond Jewellery, truly Different by Design.</p>
                </div>

                <div className=' bg-[#fafafa] md:px-[20px] md:py-[40px] py-3 flex flex-col gap-5 justify-center items-center'>
                    <p className=' text-center text-[#757575]'>
                        All our jewels are BIS Hallmarked and studded with natural diamonds certified by International Gemmological Institutes.
                    </p>

                    <marquee ref={marqueeRef} behavior="scroll" scrollamount="15" loop direction="left" className="md:mx-[350px] mx-10 text-center"
                        onMouseOver={handlemouseOver}
                        onMouseOut={handlemouseOut}
                    >
                        <div className=" flex gap-40 ">
                            <img src="/MainHero/certification-3.webp" alt="" />
                            <img src="/MainHero/certification-1.webp" alt="" />
                            <img src="/MainHero/certification-4.webp" alt="" />
                            <img src="/MainHero/certification-5.webp" alt="" />
                            <img src="/MainHero/certification-6.webp" alt="" />
                        </div>
                    </marquee>

                    <button className="px-5 py-2 bg-[#b2872d] text-white rounded-3xl uppercase">About Us</button>
                </div>
            </div>

        </>
    )
}
