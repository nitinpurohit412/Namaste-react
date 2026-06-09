import { Link } from "react-router-dom";

const RestaurantCard = ({ resData }) => {

    // resData is now the flat info object directly (name, cuisines, avgRating, etc.)
    const {
        id,
        name,
        cuisines,
        avgRating,
        costForTwo,
        cloudinaryImageId,
        sla,
    } = resData;

    return (
        <div className="res-card">
            <img
                className="foodimg"
                alt={name}
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} ⭐ rating</h5>
            <h5>{costForTwo}</h5>
            <h5>{sla?.slaString}</h5>
        </div>
    );
};

export default RestaurantCard;