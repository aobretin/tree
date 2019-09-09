import React, {useContext} from 'react';
import './styles.css';

import {SearchTermContext} from '../../providers/Search-term-provider';

function FilterOverlay() {
  const [searchTerm] = useContext(SearchTermContext);

  return searchTerm.length > 0 && <div data-testid="search-overlay" className="search-overlay"></div>
}

export default FilterOverlay;
