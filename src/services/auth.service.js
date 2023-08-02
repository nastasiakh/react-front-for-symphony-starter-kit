import axiosInstance from '../api/axiosInstance';

class AuthService {
    login(credentials) {
        return axiosInstance.post("/auth/login", credentials)
            .then((response) => {
                if (response.data.token) {
                    return response.data.token
                }
                return response.data;
            })
    };
    signUp(credentials) {
        return axiosInstance.post("auth/signUp", credentials)
    }
}

export default new AuthService();