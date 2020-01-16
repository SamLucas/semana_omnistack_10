const { Router } = require("express");
const routes = Router();

// Import Controller
const DevController = require("./controller/DevController");

// Devs
routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);

module.exports = routes;
