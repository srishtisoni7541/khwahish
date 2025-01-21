import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { toggleSearchTab } from '../featureSlice/searchSlice/searchSlice';


function Search() {

    const dispatch = useDispatch()
    const searchbtn = () => {
        dispatch(toggleSearchTab())
    }

    const [Selectedoption, setSelectedoption] = useState("sku")

    const handleOptionChange = (option) => {
        setSelectedoption(option)
    }

    return (
        < div className='relative w-full h-full' >
            <div className="fixed top-0 w-full flex flex-col items-center h-[220px] border-b-4 border-[#b2872d] bg-[#f8f8f8]">
                <div className="w-full relative">
                    <RxCross2 className="text-[60px] cursor-pointer absolute right-0 top-2 text-[#b2872d] pt-2 pr-6"
                        onClick={searchbtn}
                    />
                </div>
                <div className="w-full m-auto flex gap-3 justify-center items-center absolute top-[60px] py-5">
                    <span className={`radio-label  h-[12px] w-[12px] border rounded-full border-[#b2872d] ${Selectedoption === "sku" ? "bg-[#b2872d]" : ""}`} onClick={() => handleOptionChange("sku")}></span>

                    <label onClick={() => handleOptionChange("sku")}>Search By SKU</label><br />

                    <span className={`radio-label  h-[12px] w-[12px] border rounded-full border-[#b2872d] ${Selectedoption === "style" ? "bg-[#b2872d]" : ""}`} onClick={() => handleOptionChange("style")}></span>

                    <label onClick={() => handleOptionChange("style")}>Search By Style</label><br />

                </div>

                {Selectedoption === "sku" ? (<div className="w-full m-auto flex justify-center items-center absolute top-[120px] py-5">
                    <input type="search" placeholder="Search by SKU" className="w-[30%] h-[40px] border outline-none px-2" />
                    <button className=" h-[40px] bg-[#b2872d] px-4 text-white ">Search</button>
                </div>)
                    :
                    (<div className="w-[60%] h-[40px] border border-[#b2872d] rounded-lg outline-none px-2 flex justify-between items-center text-gray-400 absolute top-[130px] m-auto">
                        <p className="text-gray-300">Select Style</p>
                        <FaChevronDown className=" text-end" />
                    </div>)}
            </div>


        </div>
    )
}

export default Search