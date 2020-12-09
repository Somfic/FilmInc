import router from "../../router/index";
import cache from "../cache";

export default (err) => {
    if (err.response.status == 401) {
        cache.write("token", null);
        router.push("/auth");
    }
};