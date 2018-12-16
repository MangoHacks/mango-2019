import axios from "axios";

import config from "./config";

const ri = axios.create({ baseURL: config.REGISTER_URL });

const register = fields =>
  new Promise((resolve, reject) => {
    try {
      console.log(fields);
      //   const { data } = ri.post("/register", fields);
      //   resolve(data);
    } catch (e) {
      reject(e);
    }
  });

export default { register };
