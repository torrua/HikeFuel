import HttpRequestManager from './HttpRequestManager.js';

const serverUrl = 'https://fuel-hike-torrua-06d2d937.koyeb.app';

const requests = new HttpRequestManager(serverUrl);

const registerPath = '/auth/register';

export { requests, registerPath };
