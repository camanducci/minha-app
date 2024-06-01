const express = require('express'); 
const app = express(); 
const port = 8090; 

const alunos = [{ id:1, nome:"João" },{ id:2, nome:"Maria" }, ,{ id:3, nome:"Maria" }];
 
app.get('/', (req, res) => { 
  res.send('Hello World!'); 
}); 

app.get('/alunos', (req, res) => { 
  res.json(alunos);
}); 

app.listen(port, () => { 
  console.log(`App running on port ${port}`); 
});