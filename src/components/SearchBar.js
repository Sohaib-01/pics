import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit("asdf");
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <input value={term} onChange={handleChange} />
      </div>
    </form>
  );
}

export default SearchBar;
