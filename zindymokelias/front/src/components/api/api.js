import axios from "axios";

const local = "http://localhost:8080";

export default axios.create({
	baseURL: local,
});
