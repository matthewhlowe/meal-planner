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

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});