import Api from "./Api";

const googleservive = {
    sendToken(token) {
        return Api().post('/sendGoogleTokenAccess', {token: token});
    }
}

export default googleservive;