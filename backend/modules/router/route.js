const express = require("express");
const routes = express.Router();
const dashboard = require('../database/controller/dashboard')

routes.get("/displayMessages", dashboard.getMessages);
routes.get("/countUnreadMessages", dashboard.countUnreadMessages);

module.exports = { routes };