import axios from "axios";

import {
  objectKeysCamelCaseToSnakeCase,
  objectKeysSnakeCaseToCamelCase,
} from "@/utils/index";

// instance global
export const $axios = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
});

// check token in store and add to headers Authorization: Bearer Token
const setConfig = (config) => {
  const apiToken = process.env.VUE_APP_API_KEY;
  if (apiToken) {
    // POST, DELETE, etc
    if ("data" in config) {
      config.data.apiToken = apiToken;
    }
    // GET
    else {
      config.params.apiToken = apiToken;
    }
  }

  return config;
};

$axios.interceptors.request.use(
  async function (config) {
    config = setConfig(config);
    //  POST, DELETE, etc
    if ("data" in config) {
      config.data = objectKeysCamelCaseToSnakeCase(config.data);
    }
    // GET
    else {
      config.params = objectKeysCamelCaseToSnakeCase(config.params);
    }
    return config;
  },
  async function (errorRequest) {
    throw errorRequest;
  }
);

$axios.interceptors.response.use(
  async function (response) {
    response.data = objectKeysSnakeCaseToCamelCase(response.data);
    return response;
  },
  async function (errorResponse) {
    try {
      throw errorResponse;
    } catch (error) {
      // error in try
      throw errorResponse;
    }
  }
);
