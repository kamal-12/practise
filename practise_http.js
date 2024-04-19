import * as http from "http";
import express from "express";
const app = express();
const server = http.createServer(app);
// const server = http.createServer((req, res) => {
//   //   console.log(req);
//   if (req.url === "/") {
//     console.log("req is at / door");
//   } else if (req.url === "/dorm") {
//     console.log("request is at dorm");
//   } else {
//     console.log("cannot find");
//   }

//   res.setHeader("Content-Type", "application/json");

//   res.writeHead(200);
//   res.write(JSON.stringify({ hi: "hello" }));
//   res.end();
// });
app.get("/get", (req, res, next) => {
  res.setHeader("/post", "hi");
  res.json([{id: 1, title: "hello", }]);
});

server.listen(3001, () => {
  console.log("server running...");
});
