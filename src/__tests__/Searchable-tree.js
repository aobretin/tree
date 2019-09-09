import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";

import SearchableTree from '../components/Searchable-tree';

const filteredTreeMock = [{
    "title": "Getting started",
    "url": "getting-started",
    "children": [
      { "title": "First", "url": "getting-started/first" },
      { "title": "Creating your site", "url": "getting-started/creating-your-site" },
      { "title": "Publishing your site", "url": "getting-started/publishing-your-site" }
    ]
}];

it('renders without crashing', () => {
  render(
    <BrowserRouter>
      <SearchableTree filteredTree={filteredTreeMock} />
    </BrowserRouter>
  );
});

it('renders the correct tree structure', () => {
  render(
    <BrowserRouter>
      <div data-testid="searchable-tree">
        <SearchableTree filteredTree={filteredTreeMock} />
      </div>
    </BrowserRouter>
  );

  const searchableTreeLink = document.querySelectorAll('[data-testid="nav-link"]');
  expect(searchableTreeLink.length).toBe(4);
});
