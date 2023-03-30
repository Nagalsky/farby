import axios from "axios";

let jwt;

if (typeof window !== "undefined") {
  jwt = localStorage.getItem("jwt");
}

const instance = axios.create({
  baseURL: process.env.STRAPI_URL,
});

const reqInstance = axios.create({
  baseURL: process.env.STRAPI_URL,
  headers: {
    Authorization: `Bearer ${jwt}`,
  },
});

export { instance, reqInstance };
