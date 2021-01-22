/** @format */

import { useEffect, useState } from "react";
import SearchList from "../searchList/SearchList";
import styles from "./SearchBar.module.css";
function SearchBar({ countries }) {
  return (
    <>
      <input
        className={styles.SearchBar}
        type="text"
        placeholder="Search"
        id="input"
        autoComplete="false"
      />
    </>
  );
}

export default SearchBar;
