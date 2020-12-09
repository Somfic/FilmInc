const axios = require("axios").default;
const url = require("../config/config").apiServer + "/watchable";

import authCheck from './middleware/auth';
import cacheService from "./cache";

const config = {
    headers: { Authorization: `Bearer ${cacheService.read("token")}` }
};

class WatchableService {
    static get() {
        return new Promise((resolve, reject) => {
            axios
                .get(url, config)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    authCheck(err);
                    reject(err.response);
                });
        });
    }

    static create(item) {
        return new Promise((resolve, reject) => {
            axios
                .post(url, item, config)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    authCheck(err);
                    reject(err.response);
                });
        });
    }

    static edit(id, item) {
        return new Promise((resolve, reject) => {
            axios
                .put(url + "/" + id, item, config)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    authCheck(err);
                    reject(err.response);
                });
        });
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            axios
                .delete(url + "/" + id, config)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    authCheck(err);
                    reject(err.response);
                });
        });
    }

    static dupe(id) {
        return new Promise((resolve, reject) => {
            axios
                .post(url + "/" + id, null, config)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    authCheck(err);
                    reject(err.response);
                });
        });
    }
}

export default WatchableService;