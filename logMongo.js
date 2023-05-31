const morgan = require('morgan');
const mongoose = require('mongoose');

// Definição do schema para o registro de logs
const logSchema = new mongoose.Schema({
    method: String,
    url: String,
    timestamp: { type: Date, default: Date.now }
  });
  
  // Criação do modelo para o registro de logs
  const Log = mongoose.model('Log', logSchema);
  
  const log = morgan(function (tokens, req, res) {
    return JSON.stringify({
      method: tokens.method(req, res),
      url: tokens.url(req, res),
      responseTime: tokens['response-time'](req, res)
    
    });
  }, {
    stream: {
      write: function (message) {
        const log = new Log(JSON.parse(message));
        log.save().then(() => {
          console.log('Log salvo ');
        }).catch(err => {
          console.error('Erro ao salvar o log', err);
        });
      }
    }
  });
  
  module.exports = log;