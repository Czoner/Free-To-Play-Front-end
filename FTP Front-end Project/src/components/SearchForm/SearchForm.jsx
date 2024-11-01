import React from "react";
import { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ searchBar }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    searchBar(e.target.value);
  };

  return (
    <form>
      <label>
        <input
          type="text"
          className="searchbar"
          placeholder="Search for a game..."
          value={search}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default SearchForm;
