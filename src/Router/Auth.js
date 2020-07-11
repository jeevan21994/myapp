



    const Auth = {
    isAuthenticated: false,
    authenticate() {
    this.isAuthenticated = true;
    },
    signout() {
    this.isAuthenticated = false;
    },
    getToken(){
    const token = JSON.parse(localStorage.getItem('token'))
    return token
    },
    getAuth() {
    return this.isAuthenticated;
    }
    };
    export default Auth;
    