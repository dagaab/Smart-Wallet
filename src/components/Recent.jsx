import React, { useState, useEffect } from 'react';
import { Grommet, Box, Button, Meter } from 'grommet';

const Recent = () => {
  const [view, setView] = useState('select');
  const [spending, setSpending] = useState({});
  const [totalSpending, setTotalSpending] = useState(0);
  const [monthlySpending, setMonthlySpending] = useState(
    JSON.parse(localStorage.getItem('monthlySpending')) || []
  );
  useEffect(() => {
    const spendingData = JSON.parse(localStorage.getItem('spending'));
    setSpending(spendingData);
    const totalSpendingData = JSON.parse(localStorage.getItem('totalSpending'));
    setTotalSpending(totalSpendingData);
    localStorage.setItem('monthlySpending', JSON.stringify(monthlySpending));
  }, []);

  // Calculate the percentages for the meter
  const meterValues = Object.entries(spending).map(([category, amount]) => ({
    label: category,
    value: (amount / totalSpending) * 100,
  }));

  return (
    <Grommet>
      <Box>
        <Button onClick={() => setView('selected')}>Show Recent Spending</Button>
      </Box>
      {view === 'selected' && (
        <Box>
          <Button onClick={() => setView('select')}>Hide Recent Spending</Button>
          {spending && (
      <Box direction="column" border={{ color: 'black', size: 'medium' }} pad="small">
        {Object.entries(spending).map(([category, amount], index) => (
        <Box key={index}>
              {category}: {amount}
        </Box>
      ))}
  </Box>
)}

          <Box direction="row" border={{ color: 'black', size: 'medium' }}>
            Total Spending: {totalSpending}
          </Box>
          <Box direction="row" border={{ color: 'black', size: 'medium' }}>
            Mounthly Spending: {monthlySpending}
          </Box>
          <Box align="center" pad="large">
            <Meter
              type="pie"
              background="light-2"
              size="small"
              values={meterValues}
            />
          </Box>
        </Box>
      )}
    </Grommet>
  );
};

export default Recent;