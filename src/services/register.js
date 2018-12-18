import axios from "axios";

import config from "./config";

const ri = axios.create({ baseURL: config.REGISTER_URL });

const register = fields =>
  new Promise(async (resolve, reject) => {
    try {
      let formData = new FormData();

      Object.keys(fields).forEach(key => {
        formData.append(key, fields[key]);
      });

      const { data } = await ri.post("/application", formData);
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });

export default { register };
