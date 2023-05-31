// Model para produtos

// DataTypes = serve para definir qual o tipo da coluna
const { DataTypes } = require("sequelize");
const { connection } = require("./database");

const Produto = connection.define("produto", {
    
    nome: {      
      type: DataTypes.STRING,
      allowNull: false,
    },
    preco: {      
      type: DataTypes.STRING,
      allowNull: false,      
    },
    descricao: {      
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    desconto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dataDesconto: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  
  module.exports = Produto;