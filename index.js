const request = require("request");
const fs = require("fs");



const url = "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10"

const req = request.get(url, (error, response, body) => {
  let jsonString = JSON.parse(body);
  console.log("almost done")

 fs.writeFile("./result/posts.json", JSON.stringify(jsonString, null, 3), (err) => {
    console.log(err)
  });  
});
