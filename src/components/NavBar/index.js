import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { NavContainer, Nav, InputSearch, SearchButton } from "./styles.js";

const NavBar = ({ history }) => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (search === "") {
      return;
    } else {
      history.push(`/search/${search}`);
      setSearch("");
    }
  };

  return (
    <NavContainer>
      <Nav to="/">Home</Nav>
      <form onSubmit={handleSubmit}>
        <InputSearch
          type="text"
          placeholder="search"
          value={search}
          onChange={handleChange}
        />
        <SearchButton>
          <FontAwesomeIcon icon={faSearch} />
        </SearchButton>
      </form>
      <Nav to="/">Filmes</Nav>
    </NavContainer>
  );
};

export default NavBar;
