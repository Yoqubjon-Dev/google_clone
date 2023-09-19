import React from "react";
import "./SearchBar.scss";
import close from '../../assets/close.svg'

function SearchBar() {
  const [query, setQuery] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [suggestions, setSuggestions] = React.useState([]);
  const searchData = [
    {
      title: "Tesla, Inc.",
      link: "https://www.tesla.com/",
      description:
        "Tesla, Inc. is an American electric vehicle and clean energy company. Explore the latest Tesla products and news.",
    },
    {
      title: "SpaceX",
      link: "https://www.spacex.com/",
      description:
        "SpaceX is an American aerospace manufacturer and space transportation company founded by Elon Musk. Discover SpaceX's missions and innovations.",
    },
    {
      title: "Amazon",
      link: "https://www.amazon.com/",
      description:
        "Amazon.com, Inc. is an American multinational technology and e-commerce company. Shop online for a wide range of products.",
    },
    {
      title: "NASA",
      link: "https://www.nasa.gov/",
      description:
        "NASA (National Aeronautics and Space Administration) is the United States government agency responsible for the nation's civilian space program and aeronautics research.",
    },
    {
      title: "Apple Inc.",
      link: "https://www.apple.com/",
      description:
        "Apple Inc. is an American multinational technology company that designs, manufactures, and markets consumer electronics, software, and services.",
    },
    {
      title: "The New York Times",
      link: "https://www.nytimes.com/",
      description:
        "The New York Times is an American newspaper based in New York City. Get the latest news, politics, and more from The New York Times.",
    },
    {
      title: "National Geographic",
      link: "https://www.nationalgeographic.com/",
      description:
        "National Geographic is a renowned magazine and media brand known for its captivating stories, photography, and documentaries on science, nature, and culture.",
    },
    {
      title: "The Smithsonian Institution",
      link: "https://www.si.edu/",
      description:
        "The Smithsonian Institution is a group of museums and research institutions in the United States. Explore art, history, science, and more.",
    },
  ];



  const clearQuery = () => {
    setQuery("");
    setSearchResults([]);
  };

  const handleQueryChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    performSearch(newQuery);




       const filteredResults = searchData.filter((result) =>
         result.title.toLowerCase().includes(newQuery.toLowerCase())
       );
       setSearchResults(filteredResults);

       const suggestionList = filteredResults.map((result) => result.title);
       setSuggestions(suggestionList);
  };

  const performSearch = (query) => {
    if (query.trim() === "") {
      setSearchResults([]);
    } else {
      const filteredResults = searchData.filter((result) =>
        result.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  };

  return (
    <>
      <div className="container">
        <div className="search">
          <h1 className="title">Google</h1>

          <div className="search_container">
            <div className="input_box">
              <input
                type="text"
                value={query}
                onChange={handleQueryChange}
                list="suggestions"
              />

              {query && (
                <button className="clear_button" onClick={clearQuery}>
                  <svg
                    fill="#9aa0a6"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                      fill="#9aa0a6"
                    />
                  </svg>
                </button>
              )}
              <datalist className="suggestions" id="suggestions">
                {suggestions.map((suggestion, index) => (
                  <option key={index} value={suggestion} />
                ))}
              </datalist>
              <span className="lupa">
                <svg
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                    fill="#fff"
                  ></path>
                </svg>
              </span>
              <span className="photo">
                <svg
                  className="Gdd5U"
                  focusable="false"
                  viewBox="0 0 192 192"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect fill="none" height="192" width="192"></rect>
                  <g>
                    <circle fill="#34a853" cx="144.07" cy="144" r="16"></circle>
                    <circle fill="#4285f4" cx="96.07" cy="104" r="24"></circle>
                    <path
                      fill="#ea4335"
                      d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"
                    ></path>
                    <path
                      fill="#fbbc04"
                      d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>

            <div className="sub_search_item">
              <p>Google Search</p>
              <p>I'm Feeling Lucky</p>
            </div>

            <p className="localisation">
              Google offered in: <span>O‘zbek русский</span>{" "}
            </p>
          </div>

          <div className="search_results">
            {searchResults.map((result, index) => (
              <div key={index} className="search-result">
                <div className="searched_item">
                  <a href={result.link}>{result.title}</a>
                  <p>{result.description}</p>

                  <hr />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
