import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://stormy-ravine-46879.herokuapp.com/api",
});

export default baseUrl;
