
import React from 'react';
import "../styles/Navbar.css"
import { Grommet, Header as GrommetHeader, Heading, Menu, Box, Button } from 'grommet';
import { Home, User, Contact } from 'grommet-icons';
import { Link, NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className='navLinks'>
    <div>
      <div>
        <NavLink
          to="/signUp"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Sign Up
        </NavLink>
      </div>
    </div>
  </nav>
  );
}

// export default Navbar;

const Header = () => (
  <section className="navbar">
    <GrommetHeader pad="xsmall">
      <Heading level="4">Saving Gotchi</Heading>
      <Navbar />
    </GrommetHeader>
  </section>
);

export default Header;