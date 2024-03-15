
import React, { useState, useEffect } from 'react';
import { Grommet, Box, Button, Text, TextInput } from 'grommet';
import { Home, CoatCheck, Cart, Car, Restaurant, Yoga } from 'grommet-icons';

const categories = [
  { label: 'Home', icon: <Home /> },
  { label: 'Wardrobe', icon: <CoatCheck /> },
  { label: 'Groceries', icon: <Cart /> },
  { label: 'Auto', icon: <Car /> },
  { label: 'Restaurant', icon: <Restaurant /> },
  { label: 'Gym', icon: <Yoga /> },
];

const Categories = () => {
  const [spending, setSpending] = useState(
    JSON.parse(localStorage.getItem('spending')) || {
      Home: 0,
      Wardrobe: 0,
      Groceries: 0,
      Auto: 0,
      Restaurant: 0,
      Gym: 0,
    }
  );
  const [inputValues, setInputValues] = useState({
    Home: '',
    Wardrobe: '',
    Groceries: '',
    Auto: '',
    Restaurant: '',
    Gym: '',
  });

  useEffect(() => {
    localStorage.setItem('spending', JSON.stringify(spending));
  }, [spending]);

  const handleSpend = (category) => {
    setSpending((prevSpending) => ({
      ...prevSpending,
      [category]: prevSpending[category] + Number(inputValues[category]),
    }));
    setInputValues((prevValues) => ({
      ...prevValues,
      [category]: '',
    }));
  };

  const handleInputChange = (category, event) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [category]: event.target.value,
    }));
  };

  return (
    <Grommet>
      <Box align="center" pad="medium">
        {categories.map((item) => (
          <Box key={item.label} gap="xsmall" align="center">
            <Button icon={item.icon} label={item.label} onClick={() => handleSpend(item.label)} />
            <TextInput
              value={inputValues[item.label]}
              onChange={(event) => handleInputChange(item.label, event)}
              placeholder={`Enter amount for ${item.label}`}
            />
            <Text>{`Spent on ${item.label}: ${spending[item.label]}`}</Text>
          </Box>
        ))}
      </Box>
    </Grommet>
  );
};

export default Categories;