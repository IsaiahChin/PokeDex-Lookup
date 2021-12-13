import "./Search.css";

const Search = () => {
  return (
    <div id="search">
      <form>
        <label>
          Who are you looking for?
          <br />
          <input required type="text" name="name" placeholder="E.g. pikachu" />
        </label>
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Search;
