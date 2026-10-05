import http from "http";

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.url === "/api/hello") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello from the backend!" }));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not found" }));
  }
});

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});