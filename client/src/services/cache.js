class CacheService {
    static write(name, content) {
        localStorage[name] = content;
    }

    static writeObject(name, content) {
        let json = JSON.stringify(content);
        this.write(name, json);
    }

    static read(name) {
        return localStorage[name];
    }

    static readObject(name) {
        let json = this.read(name);
        if (json) {
            return JSON.parse(json);
        }
        return null;
    }
}
export default CacheService;