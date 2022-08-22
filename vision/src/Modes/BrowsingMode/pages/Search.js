import React from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Button from "@mui/material/Button";
export const Search = () => {
  const search = (e) => {
    e.preventDefault();
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" sx={{ fontSize: "3rem" }} />
        <input />
        <MicIcon
          sx={{ fontSize: "3rem", position: "absolute", marginLeft: "52rem" }}
        />
      </div>
      <div className="search__buttons">
        <Button variant="outlined" type="submit" onClick={search}>
          Vision Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
      {/* <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            onClick={search}
            type="submit"
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div> */}
    </form>
  );
};
