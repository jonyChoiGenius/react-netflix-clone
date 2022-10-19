import axios from "../../api/axios";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SearchPage.css";
import useDebounce from "../../hooks/useDebounce";

function SearchPage() {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);

  // console.log("useLocation()", useLocation());
  //   Object
  // hash: ""
  // key: "6mudxisl"
  // pathname: "/search"
  // search: "?q=w"
  // state: null
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  const searchTerm = query.get("q");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // useEffect(() => {
  //   if (searchTerm) {
  //     fetchSearchMovie(searchTerm);
  //   }
  // }, [searchTerm]);
  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      // console.log(request.data.results);
      setSearchResults(request.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className="search-container">
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className="movie" key={movie.id}>
                {movie.name || movie.title || movie.original_title}
                <div
                  onClick={() => navigate(`/${movie.id}`)}
                  // movie.id를 타고 detailpage로 넘어가게 됨
                  className="movie__column-poster"
                >
                  <img
                    src={movieImageUrl}
                    alt="movie poster"
                    className="movie__poster"
                  />
                </div>
              </div>
            );
          } else {
            return <></>;
          }
        })}
      </section>
    ) : (
      <section className="no-results">
        <div className="no-results__text">
          <p>검색어 "{debouncedSearchTerm}"에 맞는 영화가 없습니다.</p>
        </div>
      </section>
    );
  };

  return renderSearchResults();
}

export default SearchPage;
