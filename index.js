const http = require("http");

const server = http.createServer((req,res) => {
    console.log("got request");
    res.end("over");
});

server.listen(5000, ()=> {console.log("server listening");} );