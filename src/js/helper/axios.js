import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://randomuser.me/api/",
    timeout: 20000,
});

export const sendGet = (url = "", params, toast = false, loading = false) => axiosInstance.get(url, { params })
    .then((res) => {
        return res;
    });

const axiosCustom = {
    sendGet,
}

export default axiosCustom;