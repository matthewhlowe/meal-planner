import express from 'express';
import cors from 'cors';

import { mockMeals } from './mocks.js';

const app = express();
const port = 3001;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from the meal-planner-backend!');
});

app.get('/meals', (req, res) => {
  res.json(mockMeals);
});

app.post('/meal', (req, res) => {
  if (!req.body) {
    return res.status(400).send('Request body is missing');
  }

  if (!req.body.name) {
    return res.status(400).send('Meal name is required');
  }

  if (!req.body.type) {
    return res.status(400).send('Meal type is required');
  }

  if (!req.body.ingredients) {
    return res.status(400).send('Ingredients are required');
  }

  // Add meal to database

  res.status(201).send('Meal created');
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});