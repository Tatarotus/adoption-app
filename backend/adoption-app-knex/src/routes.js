const express = require("express");
const routes = express.Router();
const PetsController = require("./controllers/PetsController.js");
//Main request
//routes.post("/pets", LeadController.index);
routes.get("/pets", PetsController.index);
routes.post("/pets", PetsController.create);
routes.post("/pets", PetsController.delete);
routes.delete("/pets/:id", PetsController.delete);

module.exports = routes;
