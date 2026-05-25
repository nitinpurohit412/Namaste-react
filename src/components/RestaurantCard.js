const RestaurantCard = (props) => {
    const { resData } = props;

    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData.info ;

    return (
        <div className="res-card">
            <img 
                className="foodimg" 
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} rating</h5>
            <h5>{costForTwo}</h5>
        </div>
    );
};

export default RestaurantCard;