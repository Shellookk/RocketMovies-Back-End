// Importando arquivos
require("express-async-errors");
const AppError = require("./utils/AppError");
const express = require("express");
const routes = require("./routes");
const migrationsRun = require("./database/sqlite/migrations");

// Inicializando
migrationsRun();
const app = express();
app.use(express.json());
app.use(routes);

//Funções
app.use((error, request, response, next) => {

    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "Error",
            message: error.message
        });
    };

    console.error(error);

    return response.status(500).json({
        status: "Error",
        message: "Internal server error"
    });

});


// Setando a porta e o montando o console informando a inicialização junto com a porta
const PORT = 3333;
app.listen(PORT, () => console.log(`Server is runing on Port: ${PORT}`));

