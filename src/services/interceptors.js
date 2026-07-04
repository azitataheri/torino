import { api } from "./config";

const getAccessToken = () => {
    if(typeof document === "undefined") return null;

    const match = document.cookie.match(/accessToken=([^;]+)/)
    return match ? match[1] : null
}

// Request interceptor
api.interceptors.request.use((config) => {
    const token = getAccessToken();
    console.log('token:', token);
    
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})


// Response interceptor
api.interceptors.response.use(
  (res) => res,

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(() => api(originalRequest));
      }

      isRefreshing = true;

      try {
        const refreshToken = getCookie("refreshToken");

        const res = await refreshTokenApi(refreshToken);
        const newAccessToken = res.data.accessToken;

        document.cookie = `accessToken=${newAccessToken}; path=/`;

        api.defaults.headers.Authorization = `Bearer ${newAccessToken}`;

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        processQueue(null, newAccessToken);

        return api(originalRequest);
      } catch (err) {
        processQueue(err, null);

        document.cookie = "accessToken=; max-age=0";
        document.cookie = "refreshToken=; max-age=0";

        window.location.href = "/";
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);