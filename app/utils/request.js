import axios from 'axios';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

module.exports.post = (url, data) => {
  console.log("POST:", route(url));
  return axios.post(route(url), data)
}

module.exports.get = (url) => {
  console.log("GET:", route(url));
  return axios.get(route(url))
}

module.exports.setToken = (token) => {
  axios.defaults.headers.common['Authorization'] = "Bearer " + token;
}

const url = (req) => {
  return `http://heimdall3.ddns.net:8080/${req}`;

}

const route = (req) => {
  return url('/InterviewApi'+req);
}


module.exports.url = url;
module.exports.route = route;
