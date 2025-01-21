import { Link } from "react-router-dom"

const SubMenu = ({ items, hoveredItem, onItemHover }) =>{
    return(
        <div className="flex flex-col gap-3 w-1/3">
         {items.map(item =>{
            return <div className="text-sm cursor-pointer hover:text-amber-700" key={item.id} onMouseEnter={()=> onItemHover(item)}>
                <Link to={item.link}>{item.name}</Link>
                
            </div>
         })}
</div>
    )
}

export default SubMenu