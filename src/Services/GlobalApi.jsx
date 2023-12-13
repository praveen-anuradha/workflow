import axios from "axios";

const key = "ce23b84996184975ac20c89ffb5b1e92";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get("/genres?key=" + key);
const getAllGames = axiosCreate.get("/games?key=" + key);
const getGameListByGenreId = (id) =>
  axiosCreate.get("/games?key=" + key + "&genres=" + id);
export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
};
