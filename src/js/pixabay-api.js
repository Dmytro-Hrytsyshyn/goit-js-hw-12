import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchEl = (searchedQuery, page) => {
  const axiosOptions = {
    params: {
      key: '45536153-cc603d9bdbd983a3052077003',
      q: searchedQuery,
      orientation: 'horizontal',
      page: page,
      per_page: 15,
      image_type: 'photo',
      safesearch: 'true',
    },
  };

  return axios.get(``, axiosOptions);
};
