import React, { useState, useEffect } from 'react';
import "../styles/Categories.css"
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
  const [monthlySpending, setMonthlySpending] = useState(
    JSON.parse(localStorage.getItem('monthlySpending')) || []
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
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Check if today is the last day of the month
    if (today.getMonth() !== tomorrow.getMonth()) {
      // Reset spending and totalSpending
      setSpending({
        Home: 0,
        Wardrobe: 0,
        Groceries: 0,
        Auto: 0,
        Restaurant: 0,
        Gym: 0,
      });
      localStorage.setItem('spending', JSON.stringify(spending));
      localStorage.setItem('totalSpending', '0');
    }

    localStorage.setItem('monthlySpending', JSON.stringify(monthlySpending));
  }, [spending, monthlySpending]);


  useEffect(() => {
    localStorage.setItem('spending', JSON.stringify(spending));
    const totalSpending = Object.values(spending).reduce((a, b) => a + Number(b), 0).toFixed(2);
    localStorage.setItem('totalSpending', totalSpending);
    localStorage.setItem('monthlySpending', JSON.stringify(monthlySpending));
  }, [spending, monthlySpending]);

  const [error, setError] = useState('');

  const handleSpend = (category) => {
    if (isNaN(inputValues[category])) {
      setError('Please enter a number');
      return;
    }
    setSpending((prevSpending) => ({
      ...prevSpending,
      [category]: (parseFloat(prevSpending[category]) + Number(inputValues[category])).toFixed(2),
    }));
    setInputValues((prevValues) => ({
      ...prevValues,
      [category]: '',
    }));
    setError('');
  };

  const handleInputChange = (category, event) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [category]: event.target.value,
    }));
  };
  const totalSpending = Object.values(spending).reduce((a, b) => a + Number(b), 0).toFixed(2);

  return (
    <section className='categories'>
    <Grommet>
      <Box align="center" pad="small" gap="medium">
        {categories.map((item) => (
          <Box key={item.label} gap="xxsmall" align="center">
            <Button primary icon={item.icon} label={item.label} color={"rgb(0,71,119)"} onClick={() => handleSpend(item.label)} />
            <TextInput
              value={inputValues[item.label]}
              onChange={(event) => handleInputChange(item.label, event)}
              placeholder={`Enter amount for ${item.label}`}
            />
            {/* <Text>{`Spent on ${item.label}:£ ${spending[item.label]}`}</Text> */}
            {error && <Text color="status-critical">{error}</Text>}
          </Box>
        ))}
        {/* <Text>{`Total spending: ${totalSpending}`}</Text> */}
        {/* <Text>{`Montly spending: ${monthlySpending}`}</Text> */}
      </Box>
    </Grommet>
    </section>
  );
};

export default Categories;