const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Send an eval request');
});

app.post('/', (req, res) => {
  const { data } = req.body;
  const result = eval(data);
  console.log(`${data} = ${result}`);
  res.status(200).send(`${result}`);
});

app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
