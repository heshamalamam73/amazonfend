/** @format */

import { useEffect, useState } from "react";
import SearchList from "../searchList/SearchList";

function SearchBar({ countries }) {
  return (
    <>
      <input type="text" placeholder="Search" id="input" autoComplete="false" />
    </>
  );
}


export default SearchBar;
