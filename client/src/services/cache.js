class CacheService {
    static write(name, content) {
        localStorage[name] = content;
    }

    static read(name) {
        return localStorage[name];
    }
}
export default CacheService;