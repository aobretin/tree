import React, {useState, useEffect} from 'react';
import {GET_TREE_URL} from '../../constants';

import {SearchTermProvider} from '../../providers/Search-term-provider';

import SearchableTree from '../Searchable-tree';
import FilterInput from '../Filter-input';
import FilterOverlay from '../Filter-overlay';
import RoutesGenerator from '../Routes-generator';

function Tree() {
  const [filteredTree, setFilteredtree] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(GET_TREE_URL)
      .then(rawResponse => rawResponse.json())
      .catch(e => {
        setError(e);
        console.error(e);
      })
      .then(tree => {
        setFilteredtree(tree);
        setLoading(false);
      });
  }, []);

  const onFilter = (searchTerm = "") => setFilteredtree(filterTree(searchTerm));

  const filterTree = (searchTerm = "", nextNode = filteredTree) => {
    return nextNode.map(node => {
      // we reconstruct the tree attaching the match flag
      return {
        ...node,
        ...node.children && {children: filterTree(searchTerm, node.children)},
        isMatch: searchTerm.length > 0 && node.title.toLowerCase().includes(searchTerm)
      }
    });
  }

  return (
    <div className="container mt-2">
      {
        loading
        ?
        <h1 className="text-center">Please wait... Loading</h1>
        :
          error
          ?
          <h1 className="text-center">Something has gone wrong</h1>
          :
          <SearchTermProvider>
            <FilterOverlay />
            <FilterInput filterTreeHandler={onFilter} />
            <div className="row mt-5">
              <div className="col-sm-4 border-right">
                <SearchableTree filteredTree={filteredTree} />
              </div>

              <div className="col-sm-8">
                <RoutesGenerator filteredTree={filteredTree} />
              </div>
            </div>
          </SearchTermProvider>
      }
    </div>
  )
}

export default Tree;
