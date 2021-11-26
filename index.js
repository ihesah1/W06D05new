

const express = require("express");
const dotenv = require("dotenv");

require("./db/db");

const app = express();

dotenv.config();

const todosRouter = require("./routers/routes/todos");
const usersRouter = require("./routers/routes/users");
app.use(express.json());

app.use("/todos", todosRouter);
app.use("/users", usersRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
  
