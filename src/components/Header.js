import { useState, useEffect, use, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser)


    //*   Subscribing to the store using Selector
    const cartItems = useSelector((store)=> store.cart.items)
    console.log(cartItems)

    useEffect(() => {
    }, [btnNameReact]);

    return (
        <div className="flex  justify-between bg-pink-200">
            <div className="logo-container">
                <img className="w-30" src={LOGO_URL} alt="logo" />
                </div>           
            <div className="flex items-center">
                <ul className="flex p-5 m-5">
                    <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to="/cart">Cart :({cartItems.length} items)</Link></li>

                    <button
                        className="login cursor-pointer"
                        onClick={() => {
                            btnNameReact === "Login"
                                ? setbtnNameReact("Logout")
                                : setbtnNameReact("Login");
                        }}
                    >
                        {btnNameReact}
                    </button>

                     <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;