import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';

import FilterInput from '../components/Filter-input';
import {SearchTermProvider} from '../providers/Search-term-provider';

it('renders without crashing', () => {
  render(
    <SearchTermProvider>
      <FilterInput filterTreeHandler={jest.fn()} />
    </SearchTermProvider>
  );
});
