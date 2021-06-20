import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID iUY96ywyCtPUtVg649JITZ2mJj7Yyc9fmpSX3STcq_A',
  },
});
