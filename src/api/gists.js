import { request } from "./request";

export const getPublicGistsApi = (page = 1) => {
  return request.get(`/gists/public?page=${page}`);
};

export const searchGistsApi = (name = 1) => {
  return request.get(`/users/${name}/gists`);
};