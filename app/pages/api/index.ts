import axios from "axios";

export const baseURL = 'http://localhost:5555/api';
// export const baseURL = 'http://f544-2409-40d2-1025-8dac-5109-ee6f-7111-e43a.ngrok-free.app/api'
export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add authorization token from local storage to the headers
const token = localStorage.getItem("accessToken"); // Replace "your_token_key" with the actual key you use in local storage
console.log(token)
if (token) {
  api.defaults.headers.common["authorization"] = `${token}`;
}

export default api;

