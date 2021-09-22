import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchinput" type="text" />
        <SearchIcon className="header__searchicon" />
      </div>

      <div className="header__nav">
        <Link to ="/login">
          <div className="header__option">
            <span className="header__optionlineone">hello </span>
            <span className="header__optionlinetwo">Sing In</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionlineone">Returns</span>
          <span className="header__optionlinetwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionlineone">your</span>
          <span className="header__optionlinetwo">prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionbasket">
            <ShoppingBasketIcon />
            <span className="header__optionlinetwo header__basketcount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
