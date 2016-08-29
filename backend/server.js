var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3412;

app.use(bodyParser.json());

var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular"},
	{nome: "Vivo", codigo: 15, categoria: "Celular"},
	{nome: "Tim", codigo: 41, categoria: "Celular"},
	{nome: "GVT", codigo: 25, categoria: "Fixo"},
	{nome: "Embratel", codigo: 21, categoria: "Fixo"}
];

var contatos = [
  {id: 1, nome: "Bruno", telefone: "99 99860-4477", operadora: operadoras[0]},
  {id: 2, nome: "Sandra", telefone: "69 99784-4046", operadora: operadoras[1]},
  {id: 3, nome: "Mariana", telefone: "83 99978-0986", operadora: operadoras[2]}
];


app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contatos', function(req, res) {
  res.json(contatos);
});

app.get('/contatos/:id', function(req, res) {
  contatos.forEach(function (contato) {
  	if (contato.id == req.params.id) {
  		res.json(contato);
  		return;
  	}
  });
  res.status(404).end();
});

app.post('/contatos', function(req, res) {
  contatos.push(req.body);
  res.json(true);
});

app.delete('/contatos/:id', function(req, res) {
  for (var i = 0; i < contatos.length; i++) {
      var contato = contatos[i];
      if(contato.id == req.params.id) {
          contatos.splice(i, 1);
          res.json(true);
      }
  }
  res.status(404).end();
});

app.get('/operadoras', function(req, res) {
  res.json(operadoras);
});

app.listen(process.env.PORT || port, function() {
  console.log("servidor rodando na porta " + port);
});