const RestaurantCard = (props)=>{
    const {resData} = props

    const {name, cuisines, avgRating, costForTwo} = resData?.info
    return (
        <div className="res-card">
            <img className="foodimg" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/8ac5f9c7-3ede-4c1b-abfd-0bd6b7baa467_53476.jpg"/>
             <h3>{name}</h3>
             <h4>{cuisines.join(", ")}</h4>
             <h5>{avgRating}rating</h5>
             <h5>{costForTwo}</h5>
        </div>
    )
}

export default RestaurantCard;