import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { NavContainer, Nav, InputSearch, SearchButton } from './styles.js'

const NavBar = (props) => {
  const [search, setSearch] = useState("")

  function handleChange(event) {
    setSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (search === "") {
      return
    } else {
      setSearch("");
      props.history.push(`/search/${search}`);
      //this is a gambiarra! Correct with didUpdate on results page
      document.location.reload();
    }
  }

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
        <SearchButton type="submit"><FontAwesomeIcon icon={faSearch} /></SearchButton>
      </form>
      <Nav to="/">Filmes</Nav>
    </NavContainer>
  )
}

export default NavBar;
