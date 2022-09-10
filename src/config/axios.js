import axios from "axios";

// Interceptor for every Api Response
axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    // Auto logout when status is unauthorized
    if (err.response?.status === 401) {
      localStorage.clear();
      setTimeout(() => {
        window.location.pathname = "/connect";
      }, 1500);
    }
    return Promise.reject(err);
  }
);

export const getApiResponse = async (url, isAuth, req, data, token) => {
  const jwt = token || (isAuth ? JSON.parse(localStorage.getItem("jwt")) : "");
  const result = await axios({
    url,
    data,
    headers: {
      Authorization: `${jwt}`,
    },
    method: req,
  });
  return result.data;
};
