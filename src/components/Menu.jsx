import { Link } from "react-router-dom"

const Menu = ({ categories, selectedCategory, onCategoryHover }) =>{

    return(
        <div className=" flex flex-col gap-3 w-1/3 border-r-2 border-gray-200 border-solid px-8">
           {categories.map(category=>{
            return <div className="text-sm cursor-pointer hover:text-amber-700" key={category.id} onMouseEnter={()=>onCategoryHover(category)}>
                {/* <h2>{category.name}</h2> */}
                <Link to={category.link} >{category.name}</Link>
            </div>
           })}
            </div>
    )
}

export default Menu