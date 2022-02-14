import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import StoreProvider from '../../context/StoreProvider'
import { render } from '@testing-library/react';


const renderWithRouter = (component, routeConfigs = ['/']) => (
  render(
    <MemoryRouter initialEntries={ routeConfigs }>
      <StoreProvider>
        {component}
      </StoreProvider>
    </MemoryRouter>,
  )
);

export default renderWithRouter;