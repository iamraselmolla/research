const express = require('express');
const userRouter = require('./router/user.router');
const cors = require("cors");
require('./dbConnect');
const server = express();
server.use(cors())
server.use(express.json())


// Connect to MongoDB using Mongoose



// Post userData 
server.use("/api/user", userRouter);



  // Your Express.js routes or middleware can be defined here
  server.get('/api/example', (req, res) => {
    // Handle your Express.js API endpoint logic here
    res.json({ message: 'Example API endpoint' });
  });

  // Default route handler for Next.js pages
  server.all('*', (req, res) => {
    res.status(404).json({
      message: 'API endpoint not found',
    });
  });

  server.listen(3001, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3001');
  });

