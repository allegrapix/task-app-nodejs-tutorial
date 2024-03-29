const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;

// Configuring express to parse the incoming json
app.use(express.json());

// Configuring routers
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

