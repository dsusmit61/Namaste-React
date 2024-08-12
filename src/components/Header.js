import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/" className="font-bold hover:text-orange-500">
              Home
            </Link>
          </li>
          <li className="px-4 ">
            <Link to="/about" className="font-bold hover:text-orange-500">
              About
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" className="font-bold hover:text-orange-500">
              Contact
            </Link>
          </li>
          <li className="px-4">
            <Link to="cart" className="font-bold hover:text-orange-500">
              Cart
            </Link>
          </li>
          <div className="ml-2 font-bold hover:text-orange-500">
            <button
              className="login"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
                console.log(btnName);
              }}
            >
              {btnName}
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Header;
