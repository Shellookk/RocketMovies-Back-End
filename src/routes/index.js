// Importando arquivos
const { Router } = require("express");
const usersRoutes = require("./users.routes");
const movie_notesRoutes = require("./movie_notes.routes");
const movie_tagsRoutes = require("./movie_tags.routes");

// Inicialização das rotas
const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/movie_notes', movie_notesRoutes);
routes.use('/movie_tags', movie_tagsRoutes);
module.exports = routes;