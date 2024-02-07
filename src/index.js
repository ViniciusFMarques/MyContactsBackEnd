const express = require('express');

require('dotenv').config();
const PORT = process.env.PORT;

require('express-async-errors');

const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(cors);

app.use(routes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
