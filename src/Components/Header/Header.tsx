import Input from "../Inputs/Input";
import { CiLocationOn } from "react-icons/ci";       // Location Icon
import { FaRegHeart } from "react-icons/fa";         // Heart Icon
import { FaRegUser } from "react-icons/fa";          // User Icon
import { FaCartArrowDown } from "react-icons/fa6";   // Cart Icon
import { TfiMenu } from "react-icons/tfi";           // Menu Icon

import "./_Header.scss";


function Header() {
    return(
        <div className="container header">
            <div>
                <a href="../../../index.html" title="Home Page"><img src="https://freshcart-tailwind.codescandy.com/assets/images/logo/freshcart-logo.svg" alt="Logo Image" /></a>
                <Input classSerch="serchInp" id="serchInp" type="search" name="searchValue" placeholder="Search for products" />
                <div className="location">
                    <CiLocationOn className="icon" />
                    <span>Location</span>
                </div>
            </div>

            <div className="icon-part">
                <div>
                    <FaRegHeart className="icon" title="Fav Part"/>
                    <span>4</span>
                </div>
                <FaRegUser className="icon" title="User Login" />
                <div>
                    <FaCartArrowDown className="icon" title="Cart Part" />
                    <span>8</span>
                </div>
                <div className="menu-part">
                    <TfiMenu className="icon" />
                </div>
            </div>

        </div>
    );
};

export default Header;
