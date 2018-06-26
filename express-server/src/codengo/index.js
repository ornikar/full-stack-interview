import fetch from 'node-fetch';

const uri = 'http://192.168.2.240:5050/api/v1/';

export const apiQuery = (path, options) => fetch(uri + '/' + path, options)
  .then(res => res.json())
  .catch(err => console.error(err));

export const getSessions = () => {
  return [];
}
