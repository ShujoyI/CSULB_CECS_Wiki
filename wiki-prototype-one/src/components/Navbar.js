import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
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
                    <Link to='/' className='navbar-logo' onClick={closeWebMenu}>
                        CSulb Wiki <i className='fas fa-globe-americas' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/home' className='nav-links' onClick={closeWebMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/account' className='nav-links' onClick={closeWebMenu}>
                                Account
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/courseExplorer' className='nav-links' onClick={closeWebMenu}>
                                Course Explorer
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/guides' className='nav-links' onClick={closeWebMenu}>
                                Guides
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/career' className='nav-links' onClick={closeWebMenu}>
                                Career
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/academics' className='nav-links' onClick={closeWebMenu}>
                                Academics
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/support' className='nav-links' onClick={closeWebMenu}>
                                Support
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>CSULB HOME</Button>}
                </div>
            </nav>
        </nav>
    )
}

export default Navbar