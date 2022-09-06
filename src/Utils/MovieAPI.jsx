import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.params = {
  api_key: 'b30723d90054545e6fdab6d6887d20fb',
  language: 'en-US',
};

export const getServiceInfo = id => {
  return axios
    .get(`/3/network/${id}`)
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
};

export const getSeriesList = (id, page) => {
  return axios
    .get(`/3/discover/tv?&with_networks=${id}&page=${page}`)
    .then(res => res.data.results)
    .catch(error => {
      throw error;
    });
};

export const getSerial = id => {
  return axios
    .get(`/3/tv/${id}`)
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
};

export const getSeasonInfo = (serialId, seasonNumber) => {
  return axios
    .get(`/3/tv/${serialId}/season/${seasonNumber}`)
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
};

export const getTopRated = () => {
  return axios
    .get(`/3/tv/top_rated`)
    .then(res => res.data.results)
    .catch(error => {
      throw error;
    });
};

export const getPopularToday = () => {
  return axios
    .get(`/3/tv/popular`)
    .then(res => res.data.results)
    .catch(error => {
      throw error;
    });
};

export const getComedyTop = () => {
  return axios
    .get(`/3/discover/movie?&sort_by=popularity.desc&with_genres=35`)
    .then(res => res.data.results)
    .catch(error => {
      throw error;
    });
};
