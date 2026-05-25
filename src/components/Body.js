import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {

    // State Variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([])

    const [searchText, setSearchText] = useState("")

    // Fetch API when component loads
    useEffect(() => {
        fetchData();
    }, []);

    // Fetch Data
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&collection=83661&tags=layout_CCS_Desserts&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await data.json();

        console.log(json)


        const restaurants = json?.data?.cards
            ?.filter((item) => item?.card?.card?.info)
            ?.map((item) => item?.card?.card);

        console.log(restaurants);

        setListOfRestaurants(restaurants);
        setFilteredRestaurant(restaurants)
    };


    //! Conditional Rendering
      
    // if (listOfRestaurants.length === 0) {
    //     return <Shimmer />
    // }


    return listOfRestaurants.length === 0 ? (<Shimmer />) : (
        <div className="body">

            {/* Filter Button */}
            <div className="filter">
            <div className="search">
            <input className="search-box" type="text" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value)
            }}/>
            <button  
            onClick={()=>{
                const filteredRestaurant = listOfRestaurants.filter((res)=>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                setFilteredRestaurant(filteredRestaurant)
            }}
            >
                Search
            </button>
            </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.5
                        );

                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>

            </div>

            {/* Restaurant Cards */}
            <div className="res-container">

                {filteredRestaurant.map((restaurant) => (

                    <RestaurantCard
                        key={restaurant.info.id}
                        resData={restaurant}
                    />
                ))}

            </div>

        </div>
    );
};

export default Body;