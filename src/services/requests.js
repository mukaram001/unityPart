import { getApiResponse } from "../config/axios";
import { SERVER_URL } from "../config/endpoints";
import { routes } from "./endpoints";

export const loginRequest = async (authToken) => {
  const url = `${SERVER_URL}/${routes.LOGIN}`;
  const result = await getApiResponse(url, false, "get", {}, authToken);
  return result;
};

export const createNewCollectionRequest = async (data) => {
  const url = `${SERVER_URL}/${routes.CREATE_COLLECTION}`;
  const result = await getApiResponse(url, true, "post", data);
  return result;
};

export const getAllCollectionsRequest = async () => {
  const url = `${SERVER_URL}/${routes.GET_COLLECTIONS}`;
  const result = await getApiResponse(url, true, "get");
  return result;
};

export const createNewNameRequest = async (data) => {
  const url = `${SERVER_URL}/${routes.CREATE_NAME}`;
  const result = await getApiResponse(url, true, "post", data);
  return result;
};

export const getAllNamesRequest = async () => {
  const url = `${SERVER_URL}/${routes.GET_NAMES}`;
  const result = await getApiResponse(url, true, "get");
  return result;
};
