import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Btton } from './Button';
import '../styles/Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeWebMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 1140) {
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
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu-logo'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-logo-links' onClick={closeWebMenu}>
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
                    </ul>
                    <Btton className='csulbbtns' buttonStyle='csulbbtn' buttonSize='medium'>CSULB HOME</Btton>
                </div>
            </nav>
        </nav>
    )
}

export default Navbar