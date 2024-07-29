class AxiosFakeClient {
  constructor(response = {}) {
    this.response = response;
  }

  // draft
  get(url) {
    if (this.response[url]) {
      return Promise.resolve({ data: this.response[url] });
    }
    return Promise.resolve(new Error('No mock response for this URL'));
  }

  post(url) {
    if (this.response[url]) {
      return Promise.resolve({ data: this.response[url] });
    }
    return Promise.resolve(new Error('No mock response for this URL'));
  }

  // draft
  put(url) {
    if (this.response[url]) {
      return Promise.resolve({ data: this.response[url] });
    }
    return Promise.resolve(new Error('No mock response for this URL'));
  } 

  // draft
  delete(url) {
    if (this.response[url]) {
      return Promise.resolve({ data: this.response[url] });
    }
    return Promise.resolve(new Error('No mock response for this URL'));
  }
};

export default AxiosFakeClient;
