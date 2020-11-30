const axios = require("axios").default;
const url = require("../config/config").apiServer + "/watchable";

class WatchableService {
	// Get posts
	static get() {
		return axios.get(url);
	}
}

export default WatchableService;
