import React from "react";
import "./filter.css";

const Filter = ({setTextFilter}) => {
  return (
    <div className="body">
      <form action="" class="search-bar">
        <input type="search" name="search" pattern=".*\S.*" required onChange={(e)=>setTextFilter(e.target.value)} />
        <button class="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default Filter;
