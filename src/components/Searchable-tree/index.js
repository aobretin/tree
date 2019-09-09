import React from 'react';
import PropTypes from 'prop-types';

import SearchableTreeNode from '../Searchable-tree-node';

function SearchableTree({
  filteredTree = []
}) {
  return (
      filteredTree.map((node, i) => {
        return (
          <div key={i} className="nav flex-column nav-pills">
            <SearchableTreeNode node={node} />
          </div>
        )
      })
  )
}

SearchableTree.propTypes = {
  filteredTree: PropTypes.array.isRequired
}

export default SearchableTree;
