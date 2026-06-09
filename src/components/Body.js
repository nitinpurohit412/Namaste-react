import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">

            {/* Search + Filter */}
            <div className="filter">
                <div className="search">
                    <input
                        className="search-box"
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
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

                <button
                    className="filter-btn"
                    onClick={() => {
                        const filtered = listOfRestaurants.filter(
                            (res) => res.avgRating > 4.5
                        );
                        setFilteredRestaurant(filtered);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>

            {/* Restaurant Cards */}
            <div className="res-container">
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