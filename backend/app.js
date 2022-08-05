//to hold the express app, which is a node js app
const express = require('express');

//using express, execute express as a function
const app = express();

//error when server: 3000 communication to server : 4200 -> disable the default mechanism
app.use((_req, res, next) => {
  // the statement Access etc is standard and can be ready by the server and * = no matter from the ressources
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

//middleware 2
app.use('/api/posts',(_req, res, _next) => {
  const posts = [
    { id: '000125',
      title: 'First server-side post',
      content: 'This is coming from the server!'},
    { id: '000126',
      title: 'Second server-side post',
      content: 'This is coming from the server!'}

  ];
  res.status(200).json({
    message: 'Posts fetched sucessfully!',
    posts: posts
  });
});

//module object and exports object needed to export app to the server
module.exports = app;
