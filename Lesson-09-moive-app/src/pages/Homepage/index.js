import React, { useState, useEffect } from "react";
import MovieServices, {
  MOVIE_POPULAR,
  MOVIE_TOP_RATED,
  MOVIE_UPCOMING,
} from "../../services/MovieServices";

const Homepage = () => {
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpComing] = useState([]);

  useEffect(async () => {
    const upcoming = await MovieServices.getMovieByType(MOVIE_UPCOMING);
    const top_rated = await MovieServices.getMovieByType(MOVIE_TOP_RATED);
    const popular = await MovieServices.getMovieByType(MOVIE_POPULAR);

    setUpComing(upcoming.data.results);
    setUpComing(top_rated.data.results);
    setUpComing(popular.data.results);
  }, []);

  return <div>
    
  </div>;
};

export default Homepage;
