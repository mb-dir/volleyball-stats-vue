import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-volleyball.p.rapidapi.com",
  // I should add it to some .env or smt, but lets fuck it
  headers: {
    "x-rapidapi-key": "df10653d8bmsh4483ed61b853b26p135ae4jsn28f7cc6f2c6e",
  },
});

export default instance;
