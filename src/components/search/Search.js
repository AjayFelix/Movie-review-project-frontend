import React from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="container-fluid">
      <h4>Search</h4>
      <input
        type="text"
        name="search"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
