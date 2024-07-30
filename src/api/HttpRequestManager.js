class HttpRequestManager {
  constructor(url) {
    this.url = new URL(url);
  }

  getHostName() {
    return this.url.hostname;
  }

  async request(method, path, client, value = null) {
    this.url.pathname = path;
    const config = value === null ? undefined : value;
    const response = await client[method](this.url.href, config);
    return response.data;
  }

  get(path, client, value = null) {
    return this.request('get', path, client, value);
  }

  post(path, client, value = {}) {
    return this.request('post', path, client, value);
  }

  put(path, client, value = {}) {
    return this.request('put', path, client, value);
  }

  delete(path, client, value = null) {
    return this.request('delete', path, client, value);
  }
};

export default HttpRequestManager;
