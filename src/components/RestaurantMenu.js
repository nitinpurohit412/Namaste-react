import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resID } = useParams();


    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const response = await fetch(MENU_API + resID);
           
            const json = await response.json();
            setResInfo(json);
        } catch (err) {
            console.error("Error fetching menu:", err);
        }
    };

    if (resInfo === null) return <Shimmer />;

    // Extract restaurant name and info
    const resName = resInfo?.data?.cards?.[2]?.card?.card?.info?.name;
    const resCuisines = resInfo?.data?.cards?.[2]?.card?.card?.info?.cuisines?.join(", ");
    const resCostForTwo = resInfo?.data?.cards?.[2]?.card?.card?.info?.costForTwoMessage;
    const resRating = resInfo?.data?.cards?.[2]?.card?.card?.info?.avgRating;

    // Extract menu categories — they sit inside itemCards grouped by category
    const menuCards = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const menuCategories = menuCards?.filter(
        (c) =>
            c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="menu">
            <h1>{resName}</h1>
            <h3>{resCuisines}</h3>
            <h4>{resRating} ⭐ | {resCostForTwo}</h4>

            <h2>Menu</h2>

            {menuCategories?.map((category, index) => {
                const title = category?.card?.card?.title;
                const items = category?.card?.card?.itemCards;

                return (
                    <div key={index} className="menu-category">
                        <h3 className="category-title">{title}</h3>
                        <ul>
                            {items?.map((item) => {
                                const dish = item?.card?.info;
                                return (
                                    <li key={dish?.id} className="menu-item">
                                        <div>
                                            <h4>{dish?.name}</h4>
                                            <p>{dish?.description}</p>
                                            <span>
                                                ₹{dish?.price / 100 || dish?.defaultPrice / 100}
                                            </span>
                                        </div>
                                        {dish?.imageId && (
                                            <img
                                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${dish.imageId}`}
                                                alt={dish?.name}
                                            />
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default RestaurantMenu;