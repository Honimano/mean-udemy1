console.log('This is my node js server.');

const debug = require("debug")("node-angular");
const http = require('http');
const app = require('./backend/app');
//define port const
//const port = process.env.PORT || 3000;

//make sure its a valid number of port if we get it from environment variable
const normalizePort = val => {

  var port = parseInt(val, 10);

  if (isNaN(port)){
    //named pipe
    return val;
  }
  if (port >= 0) {
    //port number
    return port;
  }
  return false;
};

  const onError = error => {
    if (error.syscall !== "listen"){
      throw error;

    }
    const bind = typeof addr === "string" ? "pipe" + addr: "port" + port;
    switch (error.code){
      case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
      case "EADDRINUSE":
      console.error(bind + "is already in use");
      process.exit(1);
      break;
      default:
        throw error;
    }
  };

  const onListening =() => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe" + addr: "port" + port;
    debug("Listening on" + bind);
  };

  const port = normalizePort(process.env.PORT || "3000");
  app.set("port", port);

  const server = http.createServer(app);
    //const port = http.createServer(app);
  server.on("error", onError);
  server.on("listening", onListening);
  server.listen(port);




//pass the backend app to the server
//set app to the port
//app.set('port', port);
//const server = http.createServer(app);

//server.listen(port);
//connect the backend app as kind of a listener so the server can work, as the server is listening to incoming requests
