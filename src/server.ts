import "reflect-metadata";
import dotenv from "dotenv";
import { createConnection } from "typeorm";

import app from "./app";
import dbOptions from "./database/ormconfig";

dotenv.config();

createConnection(dbOptions)
  .then(async (connection) => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log("App running");
    });
  })
  .catch((error) => console.log(error));
