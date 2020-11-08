import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { CsulbButton } from './CsulbButton';

import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeWebMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <nav>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <ul className={click ? 'nav-menu active' : 'nav-menu-logo'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeWebMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <input type="text" className="nav-search" placeholder="Search..." />
                        </li>
                    </ul>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/account' className='nav-links' onClick={closeWebMenu}>
                                Account
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/support' className='nav-links' onClick={closeWebMenu}>
                                Support
                            </Link>
                        </li>
                    </ul>
                    {button && <CsulbButton className='csulbbtns' buttonStyle='csulbbtn--outline' buttonSize='medium'>CSULB HOME</CsulbButton>}
                </div>
            </nav>
        </nav>
    )
}

export default Navbar