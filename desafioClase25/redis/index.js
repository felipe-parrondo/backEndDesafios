const express = require("express");
const cookieParser = require("cookie-parser");
const axios = require("axios");
const redisClient = require('./connection');
const { cacheInfo } = require("./cache");

const app = express();
app.use(cookieParser());
app.use(express.json());

app.get("/:id", cacheInfo, async (req, res, next) => {
  const { id } = req.params;
  try {
    const singleCharacter = await axios(`https://rickandmortyapi.com/api/character/${id}`)
    redisClient.setex(id, 60, singleCharacter.data)
    res.json(singleCharacter.data)
  } catch (error) {
      res.send(error)
  }
});

app.listen(4000, () => {
  console.log("Server on port: ", 4000);
});