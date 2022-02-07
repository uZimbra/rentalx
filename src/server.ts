import express from "express";
import "reflect-metadata";
import SwaggerUI from "swagger-ui-express";
import "./database";
import { routes } from "./routes";
import "./shared/container";
import swaggerConfig from "./swagger.json";

const app = express();

app.use(express.json());
app.use("/api-docs", SwaggerUI.serve, SwaggerUI.setup(swaggerConfig));
app.use(routes);

app.listen(3333, () => console.log("Server running on http://localhost:3333"));
