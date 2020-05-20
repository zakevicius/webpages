import axios from "axios";

const local = "http://localhost:8080";
const heroku = "https://zindymo.herokuapp.com/";

export default axios.create({
	baseURL: local,
});
