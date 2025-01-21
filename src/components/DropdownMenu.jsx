import { categories } from "../constants"
import { forwardRef, useState } from "react"
import SubMenu from "./SubMenu"
import ImageSection from "./ImageSection"
import Menu from "./Menu"

const DropdownMenu = forwardRef(({ onMouseEnter, onMouseLeave }, ref) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0])
    const [hoveredItem, setHoveredItem] = useState(categories[0].items[0])

    const handleCategoryHover = (category) => {
        setSelectedCategory(category)
        setHoveredItem(category.items[0])
    }

    const handleItemHover = (item) => {
        setHoveredItem(item)
    }

    return (
        <div ref={ref} className="pointer-events-auto absolute top-0 z-104 flex justify-between top-full gap-16 py-12 px-36 text-black bg-white w-full " onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Menu categories={categories} selectedCategory={selectedCategory}
                onCategoryHover={handleCategoryHover} />
            <SubMenu items={selectedCategory.items}
                hoveredItem={hoveredItem}
                onItemHover={handleItemHover} />
            <ImageSection hoveredItem={hoveredItem} />
        </div>
    )
})

export default DropdownMenu