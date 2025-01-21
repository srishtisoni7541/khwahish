const ImageSection = ({hoveredItem}) =>{
    return(
        <div className="w-[90%] h-full">
                <img alt={hoveredItem.name} className="object-cover h-full" src={hoveredItem.image}/>
        </div>
        
    )
}

export default ImageSection