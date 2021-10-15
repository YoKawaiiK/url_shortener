import axios from "axios";

import {
  objectKeysCamelCaseToSnakeCase,
  objectKeysSnakeCaseToCamelCase,
} from "@/utils/index";

// instance global
export const $axios = axios.create();

// check token in store and add to headers Authorization: Bearer Token
export const setConfig = (config) => {
  const apiToken = process.env.VUE_APP_API_KEY;
  if (apiToken) {
    config = { ...config.params, apiToken: apiToken };
  }
  return config;
};

$axios.interceptors.request.use(
  async function (config) {
    config.data = objectKeysCamelCaseToSnakeCase(config.data);
    return setConfig(config);
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
