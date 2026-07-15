import { Link } from "react-router-dom";
import { useContext } from "react";
import User from "./user";
import UserContext from "../utils/UserContext";

 

const RestaurantCard = ({ resData }) => {

   const { loggedInUser } = useContext(UserContext);           
    // resData is now the flat info object directly (name, cuisines, avgRating, etc.)]
    // console.log(resData)
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
        
        <div data-testid="resCard" className="m-4 p-4 w-[250px] bg-[#f0f0f0] rounded-sm hover:bg-gray-200">
            <img
                className="fooding rounded-lg"
                alt={name}
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
            />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} ⭐ rating</h5>
            <h5>{costForTwo}</h5>
            <h5>{sla?.slaString}</h5>
            <h5>User : {loggedInUser}</h5>
        </div>
    );
};

export default RestaurantCard;