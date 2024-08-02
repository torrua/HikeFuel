import nock from 'nock';
import axios from 'axios';

import AxiosFakeClient from '../AxiosFakeClient.js';
import HttpRequestManager from '../HttpRequestManager.js';

const exampleObject = {
  id: 0,
  email: 'test@gmail.com',
  is_active: true,
  is_superuser: false,
  is_verified: false,
  username: 'Jhon15',
  first_name: 'Jhon',
  last_name: 'Connor',
};

test('register user', async () => {
  const client = new AxiosFakeClient({ 'https://fakeurl.org/fortesting': exampleObject });
  
  const fakeUrl = 'https://fakeurl.org';
  const createManager = new HttpRequestManager(fakeUrl);
  const result = await createManager.post('/fortesting', {}, client);
  expect(result).toEqual(exampleObject);
});

nock.disableNetConnect();
test('check connection', async () => {
  const scope = nock('https://fuel-hike-torrua-06d2d937.koyeb.app/')
    .get('/')
    .reply(200);

  const testManager = new HttpRequestManager('https://fuel-hike-torrua-06d2d937.koyeb.app');
  await testManager.get('/');
  expect(scope.isDone()).toBe(true);
});