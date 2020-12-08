const axios = require("axios").default;
const url = require("../config/config").apiServer + "/auth";

class AuthService {
    static login(item) {
        return new Promise((resolve, reject) => {
            axios
                .post(url + "/login", item)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err.response);
                });
        });
    }

    static register(item) {
        return new Promise((resolve, reject) => {
            axios
                .post(url + "/register", item)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err.response);
                });
        });
    }
}
export default AuthService;