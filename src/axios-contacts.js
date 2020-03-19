import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://krio-records.firebaseio.com/'
})

export default instance;
