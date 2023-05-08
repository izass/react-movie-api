import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { NavContainer, Nav, InputSearch, SearchButton } from "./styles.js";
import { useNavigation } from "../../hooks/useNavigation.js";

const NavBar = () => {
  const { goToSearchPage } = useNavigation();
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (search === "") {
      return;
    } else {
      goToSearchPage({ search });
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
