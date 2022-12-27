import React from 'react'
import "./header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { SportsBasketball } from '@mui/icons-material';

function Header() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='header'>
            <Link to={"/"}>
                <img 
                    className='header_logo' 
                    src="https://www.nicepng.com/png/full/247-2478281_proudly-sa-online-shopping-platform-online-shopping.png" 
                />
            </Link>
            
            <div className='header_search'>
                <input className='header_searchInput' type='text' />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Hello Guest
                    </span>
                    <span className='header_optionLineTwo'>
                        Sign In
                    </span>
                </div>
                <div className='header_option'>
                <span className='header_optionLineOne'>
                        Returns
                    </span>
                    <span className='header_optionLineTwo'>
                        & Orders
                    </span>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Shopping
                    </span>
                    <span className='header_optionLineTwo'>
                        Membership
                    </span>
                </div>

                <Link to={"/checkout"}>
                    <div className='header_optionBasket'>
                        <ShoppingCartIcon/>
                        <span className='header_optionLineTwo header_basketCount'>
                            { basket?.length }
                        </span>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Header;