import axios from 'axios';

class HttpRequestManager {
  constructor(url) {
    this.url = new URL(url);
  }

  getHostName() {
    return this.url.hostname;
  }

  async request(method, path, value = null, client = axios) {
    this.url.pathname = path;
    const config = value === null ? undefined : value;
    const response = await client[method](this.url.href, config);
    return response.data;
  }

  get(path, value = null, client = axios) {
    return this.request('get', path, value, client);
  }

  post(path, value = {}, client = axios) {
    return this.request('post', path, value, client);
  }

  put(path, value = {}, client = axios, ) {
    return this.request('put', path, value, client);
  }

  delete(path, value = null, client = axios) {
    return this.request('delete', path, value, client);
  }
};

export default HttpRequestManager;
