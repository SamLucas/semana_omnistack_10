const { Router } = require("express");
const routes = Router();

// Import Controller
const DevController = require("./controller/DevController");
const SearchController = require("./controller/SearchController");

// Devs
routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);

// Busca
routes.get("/seach", SearchController.index);

module.exports = routes;
