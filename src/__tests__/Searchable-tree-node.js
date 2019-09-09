import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";

import SearchableTreeNode from '../components/Searchable-tree-node';

const MATCH_CLASS = 'match-node';

it('renders without crashing', () => {
  render(
      <BrowserRouter>
        <SearchableTreeNode node={{}} />
      </BrowserRouter>
  );
});

it('renders a link correctly', () => {
  const node = {
    title: 'demo',
    url: '/demo'
  }

  render(
      <BrowserRouter>
        <SearchableTreeNode node={node} />
      </BrowserRouter>
  );

  const searchableTreeLink = document.querySelectorAll('[data-testid="nav-link"]');
  expect(searchableTreeLink.length).toBe(1);
});

it('renders with correct class if filter match flag exists', () => {
  const node = {
    title: 'demo',
    url: '/demo',
    isMatch: true
  }

  render(
      <BrowserRouter>
        <SearchableTreeNode node={node} />
      </BrowserRouter>
  );

  const searchableTreeLinkClasses = document.querySelector('[data-testid="nav-link"]').className;
  expect(searchableTreeLinkClasses).toContain(MATCH_CLASS);
});

it('renders a link correctly and calls itself recursevly if children', () => {
  const node = {
    title: 'parent',
    url: '/parent',
    children: [
      {
        title: 'child',
        url: '/child'
      }
    ]
  }

  render(
      <BrowserRouter>
        <SearchableTreeNode node={node} />
      </BrowserRouter>
  );

  const searchableTreeLink = document.querySelectorAll('[data-testid="nav-link"]');
  expect(searchableTreeLink.length).toBe(2);
});
