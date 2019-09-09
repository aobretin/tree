import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';

import Tree from '../components/Tree';
import {SearchTermProvider} from '../providers/Search-term-provider';

it('renders without crashing', () => {
  render(
    <SearchTermProvider>
      <Tree />
    </SearchTermProvider>
  );
});
