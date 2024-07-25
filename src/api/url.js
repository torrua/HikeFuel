/* import url from 'url';

const { URL } = url;

const serverUrl = new URL('https://fuel-hike-torrua-06d2d937.koyeb.app');

const serverHref = serverUrl.href;

const postUrl = new URL(serverHref);
postUrl.pathname = '/auth/register';
const postHref = postUrl.href;

export default postHref; */

const serverHref = 'https://fuel-hike-torrua-06d2d937.koyeb.app';

const postRegisterHref = 'https://fuel-hike-torrua-06d2d937.koyeb.app/auth/register';

export { serverHref, postRegisterHref };