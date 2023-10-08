
const axios = require("axios");

class AsyncHttpRequest {
  static async get(url, params) {
    return await axios.get(url, { params });
  }

  static async post(url, data) {
    return await axios.post(url, data);
  }

  static async put(url, data) {
    return await axios.put(url, data);
  }

  static async delete(url) {
    return await axios.delete(url);
  }
}

module.exports = AsyncHttpRequest;
