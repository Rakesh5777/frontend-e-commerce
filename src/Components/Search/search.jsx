import React from 'react';

const SearchComponent = ({ onSearch }) => {
  const handleInputChange = (e) => {
    console.log(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Search by product name or category"
      />
    </div>
  );
};

export default SearchComponent;
