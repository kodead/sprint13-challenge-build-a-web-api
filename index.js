/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, please read the README word for word, don't worry, you got this
in every task there may be trouble, but if you worry you make it double, don't worry, you got this
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, you got this
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just hack it…
I need this code, but don't know where, perhaps should make some middleware, don't worry, just hack it

Pull your server into this file and start it!
*/
require('dotenv').config();

console.log(process.env.PORT, process.env.NODE_ENV);
const server = require('./api/server');

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

// const express = require('express');
// const cors = require('cors');
// const app = express();
// server.use(express.json());
// server.use(cors());

// const projectRouter = require('./api/projects/projects-router');

// server.use('/api/projects', projectRouter);


// server.get('/api/projects', (req, res) => {
//     res.json({message: 'Projects route working!' });
// });


