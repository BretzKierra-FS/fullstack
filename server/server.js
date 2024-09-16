const http = require('http');
require('dotenv').config();
const connectDb = require('./app/db/config');
const cors = require('cors');
const app = require('./app/app');

app.use(cors());

connectDb();

http
  .createServer(app)
  .listen(process.env.port || 3000, () =>
    console.log(`Server is running on port:${process.env.port}`)
  );
