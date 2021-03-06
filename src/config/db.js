const mongoose = require("mongoose");

function mongoConnection() {
    mongoose
        .connect(process.env.URL)
        .then(() => {
            console.log("Conectado com sucesso com o mongoDB!");
        })
        .catch((err) => {
            console.log("Houve um erro ao se conectar, erro: " + err);
        });
}

module.exports = mongoConnection