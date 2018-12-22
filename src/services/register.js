import axios from "axios";

import config from "./config";

const ri = axios.create({ baseURL: config.REGISTER_URL });

const hacker = fields =>
  new Promise(async (resolve, reject) => {
    let formData = new FormData();

    Object.keys(fields).forEach(key => formData.append(key, fields[key]));

    try {
      const { data } = await ri.post("/application", formData);
      resolve(data);
    } catch (e) {
      reject(e.response.data.error);
    }
  });

const mentor = fields =>
  new Promise(async (resolve, reject) => {
    try {
      const { data } = await ri.post("/mentor", fields);
      resolve(data);
    } catch (e) {
      reject(e.response.data.error);
    }
  });

const volunteer = fields =>
  new Promise(async (resolve, reject) => {
    try {
      const { data } = await ri.post("/volunteer", fields);
      resolve(data);
    } catch (e) {
      console.log(e);
      reject(e.response.data.error);
    }
  });

const workshop = fields =>
  new Promise(async (resolve, reject) => {
    try {
      const { data } = await ri.post("/workshop", fields);
      resolve(data);
    } catch (e) {
      reject(e.response.data.error);
    }
  });

export default { hacker, mentor, volunteer, workshop };
