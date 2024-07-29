import axios from 'axios';
import url from '../api/url';

// draft
const getData = async () => {
  const { data } = await axios.get(url.href, {
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  });

  // draft
  return data;
};

export default getData;