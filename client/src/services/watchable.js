const axios = require("axios").default;
const url = require("../config/config").apiServer + "/watchable";

class WatchableService {
    static get() {
        return axios.get(url);
    }

    static create(item) {
        return axios.post(url, item);
    }

    static edit(id, item) {
        return axios.put(url + "/" + id, item);
    }

    static delete(id) {
        return axios.delete(url + "/" + id);
    }

    static dupe(id) {
        return axios.post(url + "/" + id);
    }
}

export default WatchableService;