// import React from "react";
// import "../styles/Navbar.css";


// function Navbar() {
//   return (
//     <nav className="navbar">
//       <a href="/">Navbar</a>
//     </nav>
//   );
// }

// export default Navbar;



import React from 'react';
import { Grommet, Header as GrommetHeader, Heading,  Menu, Box, Button } from 'grommet';
import { Home, User, Contact } from 'grommet-icons';

const items = [
  { label: 'Home', onClick: () => {}, icon: <Home /> },
  { label: 'About', onClick: () => {}, icon: <User /> },
  { label: 'Contact', onClick: () => {}, icon: <Contact /> },
];

const Navbar = () => (
  <Box direction="row" gap="medium">
    {items.map(item => (
      <Button hoverIndicator icon={item.icon} onClick={item.onClick} key={item.label} />
    ))}
  </Box>
);

const Header = () => (
  <GrommetHeader background="brand" pad="xsmall">
    <Heading level="4">My App</Heading>
    <Navbar />
  </GrommetHeader>
);

const App = () => (
  <Grommet>
    <Header />
    {/* Rest of your app goes here */}
  </Grommet>
);

export default App;