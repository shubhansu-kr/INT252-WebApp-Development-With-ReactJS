import React from 'react';

const Navbar = ({ activeLink, handleNavLinkClick }) => {
  return (
    <nav className='navbar'>
      <ul className='navlist'>
        <li className={activeLink === 'Home' ? 'active navitem' : 'navitem'}>
          <a href="#" onClick={() => handleNavLinkClick('Home')}>Home</a>
        </li>
        <li className={activeLink === 'About' ? 'active navitem' : 'navitem'}>
          <a href="#" onClick={() => handleNavLinkClick('About')}>About</a>
        </li>
        <li className={activeLink === 'Services' ? 'active navitem' : 'navitem'}>
          <a href="#" onClick={() => handleNavLinkClick('Services')}>Services</a>
        </li>
        <li className={activeLink === 'Contact' ? 'active navitem' : 'navitem'}>
          <a href="#" onClick={() => handleNavLinkClick('Contact')}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
