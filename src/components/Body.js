import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        // Foodfire API: restaurants are inside the grid listing card
        const restaurants = json?.data?.cards
            ?.find((c) => c?.card?.card?.id === "restaurant_grid_listing_v2")
            ?.card?.card?.gridElements?.infoWithStyle?.restaurants
            ?.map((item) => item?.info)
            ?.filter(Boolean);

        setListOfRestaurants(restaurants || []);
        setFilteredRestaurant(restaurants || []);
    };

    const onlineStatus = useOnlineStatus()

    if(onlineStatus === false)
        return(
        <h1>Looks like you're offline!! Please check your internet connection..........</h1>
        )



    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">

            {/* Search + Filter */}
            <div className="flex">
                <div className="search m-4 p-4">
                    <input
                        className="border border-solid border-black"
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                    className="px-4 py-1 rounded-xl bg-green-200 m-4"
                        onClick={() => {
                            const filtered = listOfRestaurants.filter((res) =>
                                res.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filtered);
                        }}
                    >
                        Search
                    </button>
                </div>
                        <div className="search m-4 p-4 flex item-center">
                <button
                    className="px-4 py-1 bg-gray-200 rounded-2xl"
                    onClick={() => {
                        const filtered = listOfRestaurants.filter(
                            (res) => res.avgRating > 4
                        );
                        setFilteredRestaurant(filtered);
                    }}
                >
                    Top Rated Restaurants
                </button>
                    </div>
            </div>

            {/* Restaurant Cards */}
            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}>
                        <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default Body;