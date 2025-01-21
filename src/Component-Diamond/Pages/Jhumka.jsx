import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import JhumkaProduct from "./JhumkaComponent/JhumkaProduct";
import { HiMiniChevronDoubleRight } from "react-icons/hi2";

function Jhumka() {
  return (
    <>

      {/* TODO:DIAMOND Shop Gray bar */}

      <div className='w-full h-[60px] bg-[#f7f7f7] my-4 flex items-center pl-[55px]'>
        <p className='text-[12px] text-[#b2872d] flex items-center text-wrap'>Best Diamond Shop in Chennai <HiMiniChevronDoubleRight /> <span className='text-black text-[13px]'>Diamond Earring</span></p>
      </div>
      <div className=" my-[30px] w-[100%] md:flex md:flex-row  flex flex-col ">
        <div className=" md:w-[45%] w-[100%]  p-2 flex md:justify-end justify-center " >
          <img src="/Diamond/KER4682 copy.jpg" className=" w-[90%] text-center" alt="" />
        </div>
        <div className="md:w-[50%] w-[90%] md:px-5 px-3">
          <h1 className=" md:text-[30px] text-[20px]">Dazzling Dreams Diamond Jhumka Earrings</h1>

          <div className=' flex items-center text-[#b2872d] gap-3 mb-7'>
            <p className=' text-[17px] gap-2'>
              SKU: <span className=''>KER4641</span>
            </p>
            <div className=" bg-red-600 p-1 rounded-full">
              <FaYoutube className=" bg-red-600 text-white " />
            </div>
          </div>

          <p className=" text-[16px] text-gray-400">Get a dose of royalty, with this queenly designer diamond jhumkas featuring a beautiful design offset by delicate Pink Coral drops.</p>

          <div className=" flex my-6 items-center gap-10 text-[#b2872d]">
            <div className=" flex px-5 py-2 gap-5 bg-[#b2872d] rounded-full items-center border border-[#b2872d] justify-center hover:bg-white text-white hover:text-[#b2872d] cursor-pointer">
              <button className=" uppercase"> Enquire price </button>
              <IoLogoWhatsapp className=' text-[25px] text-white bg-green-500 p-1 rounded-full' />

            </div>
            <p>Store Locator</p>

          </div>
          <div className="w-[95%]  border-t-2 border-gray-100 ">
            <table className="mt-5 ">
              <thead >
                <tr >
                  <th className=" border-b md:text-[17px] text-[15px]">Product Details</th>
                  <th className="text-[15px]">Shipping</th>
                  <th className="text-[15px]">Return/Exchange</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-5 py-2 text-nowrap text-[15px]">Net Gold Weight</td>
                  <td className=" text-nowrap">- 22.574 gms</td>
                  <td></td>
                  <td className=" md:block hidden">Gemstone Weight - N/A</td>
                </tr>
                <tr>
                  <td className="px-5 py-2 text-nowrap text-[15px]">Diamond Weight</td>
                  <td className=" text-nowrap">- 1.85 CTS</td>
                  <td></td>
                  <td className=" md:block hidden">Gemstone Type - N/A</td>
                </tr>
                <tr>
                  <td className="px-5 py-2 text-nowrap text-[15px]">Diamond Quality</td>
                  <td>- N/A</td>
                  <td></td>
                  <td className=" md:block hidden">Style - N/A</td>
                </tr>
                <tr>
                  <td className="px-5 py-2 text-nowrap text-[15px]">Collection</td>
                  <td>- Aasai</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" my-5 border border-[#b2872d] px-4 py-2">
            <p> All our jewels are BIS Hallmarked, and studded with natural diamonds certified by International Gemological Institutes.</p>
          </div>
        </div>
      </div>

      <div className="w-[100%] my-4 flex justify-center items-center">
        <div className=" flex justify-center items-center  w-[75%] border border-t border-gray-600"></div>
      </div>
      <JhumkaProduct />
    </>
  )
}

export default Jhumka