import express from "express";
import keys from "./sources/keys.js";
import fetch from "node-fetch";
const app = express();
app.use(express.json()); //To make Express aware of what data type the incoming data is (which is JSON). We do that using the `json()` method on the Express object.

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'hello from backend to frontend!' })
});

app.post('/weather', async (req, res) => {
  const cityName = req.body.cityName;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keys.API_KEY}&units=metric`
  if (!cityName) {
    res.status(400).json({ msg: "You should write a correct city name!" });
    return;
  };
  try {
    const response = await fetch(URL);
    const data = await response.json();
    res.status(200).json({ msg: `${cityName} is ${Math.floor(data.main.temp)} degree` });
  } catch (error) {
    res.status(500).json({ msg: 'Something went wrong' })
  }
})

export default app;
