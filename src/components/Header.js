import { useState, useEffect, use } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

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
                    <li className="px-4">Cart</li>

                    <button
                        className="login"
                        onClick={() => {
                            btnNameReact === "Login"
                                ? setbtnNameReact("Logout")
                                : setbtnNameReact("Login");
                        }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;