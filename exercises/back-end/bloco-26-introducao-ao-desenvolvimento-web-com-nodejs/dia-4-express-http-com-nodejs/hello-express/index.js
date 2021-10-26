/* const express = require('express');

const app = express(); // 1 - Criar uma nova aplicação Express;

app.get('/hello', handleHelloWordRequest); //2- Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /hello,
// a função handleHelloWorldRequest deve ser chamada. 

app.listen(3001, () => {
    console.log('Aplicação ouvindo na porta 3001');
})  // 3- Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001;

function handleHelloWordRequest(req, res) {
    res.status(200).send('Olá mundo, sou o Capa!')
} // 4- Ao tratar uma requisição com método GET no caminho /hello , enviar o status HTTP 200 que significa OK e a mensagem "Hello world!". */
 

// exemplo 2 - lista de receitas

//const { application } = require('express');
const express = require('express');
const app = express();

 const recipes = [
    { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
    { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
    { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
  ];

/*   app.get('/recipes', function (req, res) {
      res.json(recipes);
  }); */

/*   app.get('/recipes/:id', function (req, res) {
      const { id } = req.params;
      const recipe = recipes.find((r) => r.id === parseInt(id));
  
    if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

    res.status(200).json(recipe)
});
 */

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
});


  app.listen(3001, () => {
      console.log('Aplicação ouvindo na porta 3001');
  })
 

  