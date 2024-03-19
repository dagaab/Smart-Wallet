import React, { useState, useEffect } from 'react';
import "../styles/History.css";
import { Grommet, Box, Text, Meter } from 'grommet';
import SignUp from './SignUp';

function History() {
  const [monthlySpending, setMonthlySpending] = useState([]);

  useEffect(() => {
    const monthlySpendingData = JSON.parse(localStorage.getItem('monthlySpending'));
    if (monthlySpendingData) {
      setMonthlySpending(monthlySpendingData);
    }
  }, []);

  // Calculate the total spending
  const totalSpending = monthlySpending.reduce((a, b) => a + b, 0);

  // Calculate the percentages for the Meter
  const meterValues = monthlySpending.map((spending, index) => ({
    label: `Month ${index + 1}`,
    value: (spending / totalSpending) * 100,
  }));

  return (
    <Grommet>
      <Box>
        {monthlySpending.map((spending, index) => (
          <Text key={index}>Month {index + 1}: {spending}</Text>
        ))}
      </Box>
      <Box align="center" pad="large">
        Our meter pie is emptie you need to feel it!
        <Meter
          type="pie"
          background="light-2"
          size="small"
          values={meterValues}
        />
        <Box direction="row" border={{ color: 'black', size: 'medium' }} pad="large" >
          Here ti well be our data!
          {monthlySpending.map((spending, index) => (
          <Text key={index}>Month {index + 1}: {spending}</Text>
        ))}
        </Box>
        <Box align="center" pad="large">
          <SignUp />
        </Box>
      </Box>
    </Grommet>
  );
}

export default History;