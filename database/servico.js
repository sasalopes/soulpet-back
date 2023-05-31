//Model Para Serviços   

const { DataTypes } = require("sequelize");
const { connection } = require("./database");

const Servico = connection.define("servico", {
  nome: { 
    type: DataTypes.STRING, 
    allowNull: false 
},
  preco: { 
    type: DataTypes.STRING, 
    allowNull: false 
},
});

module.exports = Servico;