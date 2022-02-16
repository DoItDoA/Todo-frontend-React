import axios from "axios";

const accessToken = localStorage.getItem("ACCESS_TOKEN");

const api = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + accessToken,
  },
});

export const todo = {
  add: (title) => api.post("todo", { title }),
  call: async () => await api.get("todo"),
  delete: (id) => api.delete("todo", { data: { id } }),
  update: (id, title, done) => api.put("todo", { id, title, done }),
};

export const user = {
  signin: ({ email, password }) => api.post("auth/signin", { email, password }),
  signout: () => {
    localStorage.removeItem("ACCESS_TOKEN");
    window.location.href = "/login";
  },
  signup: ({ email, username, password }) =>
    api.post("auth/signup", { email, username, password }),
};
