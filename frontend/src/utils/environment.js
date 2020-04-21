const DEFAULT_ENV = "dev";

/**
 * Environments
 */
const Environments = {
  "dev": {
    url: "http://localhost",
    port: 4000,
  },
  "itg": {
    url: "",
    port: undefined,
  },
  "prod": {
    url: "",
    port: undefined,
  },
};

/**
 * @method getEnvironMentConfig
 * @param {*} env
 */
const getEnvironMentConfig = (env) => {
  let url = "";
  switch (env) {
    case "dev":
      url = Environments[env].url + ":" + Environments[env].port;
      break;
    case "itg":
      url = Environments[env].url + ":" +  Environments[env].port;
      break;
    case "prod":
      url = Environments[env].url + ":" +  Environments[env].port;
      break;
    default:
      url = "";
  }
  return url;
};

const BASE_URL = getEnvironMentConfig(DEFAULT_ENV);

/**
 * List of API endpoints
 */

const API_ENDPOINTS = {
  signup: "/users",
  signin: "/auth",
  getProfile: "/getProfile",
  getShortUrl: "/getShortUrl",
};

export { BASE_URL, API_ENDPOINTS };
