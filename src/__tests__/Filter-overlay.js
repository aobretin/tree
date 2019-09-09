import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import {toBeVisible} from '@testing-library/jest-dom'

import FilterOverlay from '../components/Filter-overlay';
import {SearchTermProvider} from '../providers/Search-term-provider';

expect.extend({
  toBeVisible
});

it('renders without crashing', () => {
  render(
    <SearchTermProvider>
      <FilterOverlay />
    </SearchTermProvider>
  );
});

it('becomes visible when filter term is typed', () => {
  render(
    <SearchTermProvider initialValue={"demo"}>
      <FilterOverlay />
    </SearchTermProvider>
  );

  const searchOverlay = document.querySelector('[data-testid="search-overlay"]');
  expect(searchOverlay).toBeVisible();
});
