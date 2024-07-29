import axios from "axios";

class HttpRequestManager {
  constructor(url) {
    this.url = new URL(url);
  }

  getHostName() {
    return this.url.hostname;
  }

  async requestToServer (path, method, client = axios, value = {}) {
    this.url.pathname = path;
    
    let response;
  
    switch (method) {
      case 'get':
        response = await client.get(this.url.href);
        break;
      case 'post':
        response = await client.post(this.url.href, value);
        break;
      case 'put':
        response = await client.put(this.url.href, value);
        break;
      case 'delete':
        response = await client.delete(this.url.href, value);
        break;
      default:
        throw new Error(`Unsupported method: ${method}`);
    }
  
    return response.data;
  }
}

export default HttpRequestManager;
