const express = require("express");
const cors = require("cors");

const morgan = require("morgan");

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

require("./db/mongoose");
const booksRouter = require("./routers/book");
const port = process.env.PORT || 3000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "library API",
      version: "1.0.0",
      description: "A simple Express library API",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["src/routers/*.js"],
};

const specs = swaggerJsDoc(options);

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/books", booksRouter);

app.listen(port, () => {
  console.log("Server is up on port: " + port);
});

module.exports = app;
