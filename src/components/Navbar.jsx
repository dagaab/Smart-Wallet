
import React from 'react';
import { Grommet, Header as GrommetHeader, Heading,  Menu, Box, Button } from 'grommet';
import { Home, User, Contact } from 'grommet-icons';

const items = [
  { label: 'Home', onClick: () => {}, icon: <Home /> },
  { label: 'About', onClick: () => {}, icon: <User /> },
  { label: 'Contact', onClick: () => {}, icon: <Contact /> },
];

const Navbar = () => (
  <Box direction="row" gap="large">
    {items.map(item => (
      <Button hoverIndicator icon={item.icon} onClick={item.onClick} key={item.label} />
    ))}
  </Box>
);

const Header = () => (
  <GrommetHeader background="rgb(16,25,53)" pad="xsmall">
    <Heading color="rgb(242,253,255)" level="4">Saving Gotchi</Heading>
    <Navbar />
  </GrommetHeader>
);

export default Header;