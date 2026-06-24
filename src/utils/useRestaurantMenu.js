import { useState, useEffect } from "react"
import { MENU_API } from "../utils/constant";


const useRestaurantMenu = (resID) =>{
    const [resInfo, setResInfo]= useState(null)

    useEffect(()=>{
        fetchMenu();
    }, [])

 const fetchMenu = async () => {
        try {
            const response = await fetch(MENU_API + resID);
           
            const json = await response.json();
            setResInfo(json);
        } catch (err) {
            console.error("Error fetching menu:", err);
        }
    };

    return resInfo;
}

export default useRestaurantMenu;