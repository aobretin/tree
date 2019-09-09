import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import {SearchTermContext} from '../../providers/Search-term-provider';

function FilterInput({
  filterTreeHandler
}) {
  const [searchTerm, setSearchTerm] = useContext(SearchTermContext);

  const handleFilterChange = e => {
    const inputValue = e.target.value;

    setSearchTerm(inputValue);
    filterTreeHandler(inputValue);
  }

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleFilterChange}
      className="filter-input form-control"
      placeholder="Filter..."
    />
  )
}

FilterInput.propTypes = {
  filterTreeHandler: PropTypes.func.isRequired
}

export default FilterInput;
