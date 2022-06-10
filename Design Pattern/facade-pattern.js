const axios = require("axios").default;

function getFetch(url, params = {}) {
  return axios({
    url: url,
    method: "GET",
    params: params,
  }).then((res) => res.data);
}
function getUsers() {
  return getFetch("https://jsonplaceholder.typicode.com/users");
}
function getUserPosts(userId) {
  return getFetch("https://jsonplaceholder.typicode.com/posts", {
    userId: userId,
  });
}

getUsers().then((users) => {
  users.forEach((user) => {
    getUserPosts(user.id).then((posts) => {
      console.log(user.name);
      console.log(posts.length);
    });
  });
});
