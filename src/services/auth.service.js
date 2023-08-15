import axiosInstance from "../api/axiosInstance";

class AuthService {
  login(credentials) {
    return axiosInstance.post("/auth/login", credentials).then((response) => {
      if (response.data.token) {
        return response.data.token;
      }
      return response.data;
    });
  }

  signUp(credentials) {
    return axiosInstance.post("auth/signUp", credentials).then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        return response.status;
      }
      return response.data;
    });
  }
}

export default new AuthService();
