import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

export default (
  method,
  path,
  data,
  params = {},
  headers = {}
) => axios({
  method,
  url: `${baseUrl}${path}`,
  data,
  params,
  headers
});
