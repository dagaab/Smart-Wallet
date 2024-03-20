
import React from 'react';
import "../styles/Navbar.css"
import { Grommet, Header as GrommetHeader, Heading,  Menu, Box, Button } from 'grommet';
import { Home, User, Contact } from 'grommet-icons';

const items = [
  { label: 'Home', onClick: () => {}, icon: <Home color="rgb(242,253,255)"/> },
  { label: 'About', onClick: () => {}, icon: <User color="rgb(242,253,255)"/> },
  { label: 'Contact', onClick: () => {}, icon: <Contact color="rgb(242,253,255)"/> },
];

const Navbar = () => (
  <Box direction="row" gap="large">
    {items.map(item => (
      <Button hoverIndicator icon={item.icon} onClick={item.onClick} key={item.label} />
    ))}
  </Box>
);

const Header = () => (
  <section className="navbar">
  <GrommetHeader pad="xsmall">
    <Heading level="4">Saving Gotchi</Heading>
    <Navbar />
  </GrommetHeader>
  </section>
);

export default Header;