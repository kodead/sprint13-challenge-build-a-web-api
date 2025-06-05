const express = require('express');
const cors = require('cors');

const projectsRouter = require('./projects/projects-router');
// const actionsRouter = require('./api/actions/actions-router')

const server = express();
server.use(express.json());
server.use(cors());

server.use('/api/projects', projectsRouter);

server.get('/', (req, res) => {
    res.json({ message: 'API is running' })
});
// server.use('/api/actions', actionsRouter)
// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
