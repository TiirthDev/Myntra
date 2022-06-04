import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from './StateProvider';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

function Header() {
    const [{ basket }] = useStateValue();

    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src="data:image/png;base64,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" alt="" />
            </Link>

            <div className="header__items">
                <Link to="/" className="header__item">
                    <b>Men</b>
                </Link>
                <Link to="/" className="header__item">
                    <b>Women</b>
                </Link>
                <Link to="/" className="header__item">
                    <b>Kids</b>
                </Link>
                <Link to="/" className="header__item">
                    <b>Home & Living</b>
                </Link>
                <Link to="/" className="header__item">
                    <b>Beauty</b>
                </Link>
                <Link to="/" className="header__item">
                    <b>Studio</b>
                </Link>
            </div>

            <div className="header__search">
                <SearchIcon className="header__searchIcon" />
                <input type="text" placeholder="Search for products and brands and more" className="header__searchInput" />
            </div>

            <div className="headerNav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <PermIdentityIcon />
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <FavoriteBorderIcon />
                        <span className="header__optionLineTwo">Wishlist</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__option">
                        <div className="header__optionBasket">
                            <ShoppingBagOutlinedIcon />
                            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                        </div>
                        <span className="header__optionLineTwo header__text-left">Bag</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
