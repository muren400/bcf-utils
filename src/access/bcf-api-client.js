export default class BcfApiClient {
    constructor(url) {
        this.url = url;
    }

    login(user, pass) {
        alert(user + " - " + pass);
        return null;
    }

    logout() {

    }
}