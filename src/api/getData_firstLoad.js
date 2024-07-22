import axios from 'axios';
import url from './url';

// draft
const getData = async () => {
  const { data } = await axios.get(url.pathname, {
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  });

  // draft
  return data;
};

export default getData;