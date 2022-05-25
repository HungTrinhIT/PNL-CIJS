import axios from "axios";
import { API_KEY, baseURL } from "../contants/key";
export const MOVIE_UPCOMING = "upcoming";
export const MOVIE_TOP_RATED = "top_rated";
export const MOVIE_POPULAR = "popular";

const MovieServices = {
  getMovieByType: (type) => {
    return axios.get(
      `${baseURL}/${type}?api_key=${API_KEY}&language=en-US&page=1`
    );
  },

  getMovieDetail: (movieId) => {
    return axios.get();
  },
};

export default MovieServices;
