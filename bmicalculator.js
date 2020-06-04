//jshint esversion:6
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req,res){
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/', function(req,res){
  var weight = req.body.weight ;
  var height = req.body.height ;
  height = height/100;

  var bmi = weight / Math.pow(height, 2);
  bmi = bmi.toFixed(2);

  res.send(`Your BMI is ${bmi} Kg/(m)2` );});

app.listen(process.env.PORT || 3000);
