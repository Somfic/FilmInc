import jwt from "jsonwebtoken";
import cache from "./cache";

class TokenService {
    static isAdmin() {
        let token = this.token();
        return token.isAdmin;
    }

    static name() {
        let token = this.token();
        return token.name;
    }

    static uid() {
        let token = this.token();
        return token.uid;
    }

    static token() {
        let jsonToken = cache.read("token");
        return jwt.decode(jsonToken);
    }
}

export default TokenService;