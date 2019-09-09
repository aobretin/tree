import React, {useState, createContext} from 'react';

const SearchTermContext = createContext('');

// provider to allow global access to searchTerm
const SearchTermProvider = ({
  children,
  initialValue = ''
}) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  return (
    <SearchTermContext.Provider value={[searchTerm, setSearchTerm]}>
      {children}
    </SearchTermContext.Provider>
  )
}

export {SearchTermContext, SearchTermProvider};
