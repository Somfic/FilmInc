const axios = require("axios").default;
const url = require("../config/config").apiServer + "/scheduled";

class ScheduledService {
    static get() {
        return new Promise((resolve, reject) => {
            axios
                .get(url)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err.response);
                });
        });
    }

    static create(item) {
        return new Promise((resolve, reject) => {
            axios
                .post(url, item)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err.response);
                });
        });
    }

    static edit(id, item) {
        return new Promise((resolve, reject) => {
            axios
                .put(url + "/" + id, item)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err.response);
                });
        });
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            axios
                .delete(url + "/" + id)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err.response);
                });
        });
    }

    static dupe(id) {
        return new Promise((resolve, reject) => {
            axios
                .post(url + "/" + id)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err.response);
                });
        });
    }
}

export default ScheduledService;