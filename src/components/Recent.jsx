import React, { useState, useEffect } from 'react';
import "../styles/Recent.css";
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
  }, [spending]);

  // Calculate the percentages for the meter
  const meterValues = Object.entries(spending).map(([category, amount]) => ({
    label: category,
    value: (amount / totalSpending) * 100,
  }));

  return (
    <section className='recent'>
    <Grommet>
      <Box pad="small">
        <Button primary label="Show Recent Spending" color={"rgb(0,71,119)"} onClick={() => setView('selected')}/>
      </Box>
      {view === 'selected' && (
        <Box pad="small">
          <Button secondary label="Hide Recent Spending" color={"rgb(0,71,119)"}  onClick={() => setView('select')}/>
          {spending && (
      <Box direction="column" pad="small">
        {Object.entries(spending).map(([category, amount], index) => (
        <Box key={index}>
              {category}: {amount}
        </Box>
      ))}
  </Box>
)}

          <Box direction="row">
            Total Spending: £{totalSpending}
          </Box>
          <Box direction="row" >
            Monthly Spending: £{monthlySpending}
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
    </section>
  );
};

export default Recent;