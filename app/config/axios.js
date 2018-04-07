import axios from "axios";

export default axios.create({
  baseURL: 'https://plus1up.herokuapp.com/api',
});