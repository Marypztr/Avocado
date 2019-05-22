const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");

const Food = require("../models/Food");

//const foods = []

router.get("/:id", (req, res, next) => {
  const foods = [];
  let sumProteina = 0;
  let sumChos = 0;
  let sumLipidos = 0;

  Recipe.findById(req.params.id)
    .then(recipe => {
      recipe.ingredientes.forEach(ingredient => {
        // console.log(ingredient.name)
        Food.find({ Genérico: { $regex: ingredient.name, $options: 'i' } })
          .then(food => {
            food.forEach(i => {
              // JSON.parse(i)
              sumProteina += Number(i.proteinas.replace(',','.'));
              sumChos += Number(i["hidratos de carbono"].replace(',','.'));
              sumLipidos += Number(i.lipidos.replace(',','.'));
              console.log(i)   
              res.status(200).JSON({ ...recipe, sumChos, sumLipidos, sumProteina });
              // res.status(200).JSON({ ...recipe });
            })
            //  console.log(sumProteina)
          })
          .catch(err => err);
      });
    })
    .catch(err => err);
});

module.exports = router;
