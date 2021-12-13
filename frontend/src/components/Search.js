import "./Search.css";

const Search = ({ handleChange, handleSubmit, isLoading }) => {
  return (
    <div id="search">
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>
          Which Pokemon are you looking for?
          <br />
          <input
            required
            type="text"
            name="name"
            placeholder="E.g. pikachu"
            disabled={isLoading}
            autoFocus
          />
        </label>
        <input
          id="search-button"
          type="submit"
          value="Search"
          disabled={isLoading}
        />
      </form>
    </div>
  );
};

export default Search;
