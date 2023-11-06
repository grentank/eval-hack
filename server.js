const express = require('express');

const app = express();
const PORT = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
  res.send('Send an eval request');
});

app.post('/', (req, res) => {
  const { data } = req.body;
  const result = eval(data);
  res.json({ result });
});

app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
