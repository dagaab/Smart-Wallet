import React, { useState, useEffect } from 'react';
import "../styles/History.css";
import { Grommet, Box, Text, Meter } from 'grommet';
import { Link, NavLink } from 'react-router-dom';


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
    <section className='history'>
    <Grommet>
      <Box>
        {monthlySpending.map((spending, index) => (
          <Text key={index}>Month {index + 1}: {spending}</Text>
        ))}
      </Box>
      <Box align="center" pad="large">
      Our pie is empty, you have to fill it by spending monthly!
        <Meter
          type="pie"
          background="light-2"
          size="small"
          values={meterValues}
        />
        <Box direction="row" pad="large" >
        Monthly expenses are displayed here!
          {monthlySpending.map((spending, index) => (
          <Text key={index}>Month {index + 1}: {spending}</Text>
        ))}
        </Box>
      </Box>
      <div>
        <NavLink
          to="/SignIn"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
           For demonstration use the button!
           <Box  background="black" border="2px">
          Sign Out
          </Box>
        </NavLink>
      </div>
    </Grommet>
    </section>
  );
}

export default History;