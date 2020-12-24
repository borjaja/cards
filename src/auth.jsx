class Auth {
    constructor() {
        this.authenticated = false;
    }
    login(cb) {
        this.authenticated = true;
        cb();
    }
    logout(cb) {
        this.authenticated = false;
        cb();
    }
    isAuthenticate = () => this.authenticated;
}

export default Auth;
