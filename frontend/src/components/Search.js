import "./Search.css";

const Search = ({handleChange, handleSubmit}) => {
  return (
    <div id="search">
      <p id="error-message"></p>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>
          Which Pokemon are you looking for?
          <br />
          <input required type="text" name="name" placeholder="E.g. pikachu" />
        </label>
        <input id="search-button" type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Search;
