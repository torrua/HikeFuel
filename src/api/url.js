const serverUrl = new URL('https://fuel-hike-torrua-06d2d937.koyeb.app');
const serverHref = serverUrl.href;

const copyServerUrl = new URL(serverHref);
copyServerUrl.pathname = '/auth/register';

const postRegisterHref = copyServerUrl.href;

export { serverHref, postRegisterHref };