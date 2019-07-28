import React, { useState } from 'react';
import { render, Box } from 'ink';
import SelectInput from 'ink-select-input';
import Divider from 'ink-divider';

import DashboardPage from './pages/dashboard/deahboard.page';

console.clear();

const Main = () => {
  const [currentPage, setPage] = useState('dashboard');
  const [menuTitle, setMenuTitle] = useState('Menu');

  const handleSelect = ({ label, value }) => {
    setPage(value);
    setMenuTitle(label);
  };

  const items = [
    { label: 'Dashboard', value: 'dashboard' },
    { label: 'View Issue', value: 'issue' },
  ];

  const page = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'issue':
        return <Box>hi issue</Box>;
      default:
        return `Hi`;
    }
  };

  return (
    <Box justifyContent={'space-between'}>
      <Box flexDirection={'column'} padding={1} width={30}>
        <Divider title={menuTitle} width={30} dividerChar={'='} />
        <SelectInput items={items} onSelect={handleSelect}/>
      </Box>
      {page()}
    </Box>
  );
};

render(<Main />);
