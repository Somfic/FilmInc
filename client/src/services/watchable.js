const axios = require("axios").default;
const url = require("../config/config").apiServer + "/watchable";

class WatchableService {
    static get() {
        return axios.get(url);
    }

    static add(item) {
        return axios.post(url, item);
    }
}

export default WatchableService;