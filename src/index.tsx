import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import {App} from './App';

createServer({
  models: {  //models seria o espelho da tabela, banco de dados
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAd: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAd: new Date('2021-02-14 11:00:00'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction') //retorna as transacoes de dentro do banco de dados
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody) //obter dados da requisicao  

      return schema.create('transaction', data);
    })
  } 
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

