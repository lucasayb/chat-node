import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:3433"
});

export default request;
