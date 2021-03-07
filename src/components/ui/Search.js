import { getSuggestedQuery } from "@testing-library/react";
import React, { useState } from "react";

// create form to search for characters
// 5. Add getQuery prop to Search function
const Search = ({ getQuery }) => {
  // create useState variable and function to search
  const [text, setText] = useState('')
  // 3. Create onChange function to pass q as query as a prop
  // 4. Pass q prop into setText useState function
  // 5. Pass q prop into GetQuery prop
  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }
  // 1. Pass the text variable as the value
  // 2. Add onChange event and setText to event target value that it typed
  return (
    <section className='search'>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autofocus
        />
      </form>
    </section>
  );
};

export default Search;
