const express = require('express');

const app = express();
app.use(express.json()); //To make Express aware of what data type the incoming data is (which is JSON). We do that using the `json()` method on the Express object.

app.get('/', (req, res) => {
  res.send('hello from backend to frontend!')
});

app.post('/wheather', (req, res) => {
  const cityName = req.body.cityName;
  res.status(200).json({ city: cityName });
})

app.listen(3000);