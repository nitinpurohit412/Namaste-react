import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = ()=>{
// Local state variable - Super powerful variable

const [Listofrestaurants, setListofrestaurants] = useState(resList)


    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{
                    const filteredList = Listofrestaurants.filter(
                        (res) => res.info.avgRating > 4
                    )
                    setListofrestaurants(filteredList)
                }}>
                    Top rated Restaurant

                </button>
            </div>
            <div className="search">Search</div>
            <div className="res-container">
              {Listofrestaurants.map((restaurant)=> (
                <RestaurantCard
                key={restaurant.info.id}
                 resData ={restaurant}/>
              ))}
            </div>
        </div>
    )
}

export default Body;