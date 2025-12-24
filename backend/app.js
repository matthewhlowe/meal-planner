import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pkg from 'pg';
import { fileURLToPath } from 'url';
import path from 'path';

const { Pool } = pkg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Database connection pool
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from the meal-planner-backend!');
});

app.get('/meals', async (req, res) => {
  try {
    const userId = req.query.userId;
    
    if (!userId) {
      return res.status(400).send('userId query parameter is required');
    }

    const result = await pool.query(
      'SELECT id, name, type, ingredients, image FROM meals WHERE user_id = $1 ORDER BY created_at DESC',
      [userId]
    );
    
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching meals:', error);
    res.status(500).send('Error fetching meals');
  }
});

app.post('/meal', async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).send('Request body is missing');
    }

    const { userId, name, type, ingredients, image } = req.body;

    if (!userId) {
      return res.status(400).send('User ID is required');
    }

    if (!name) {
      return res.status(400).send('Meal name is required');
    }

    if (!type) {
      return res.status(400).send('Meal type is required');
    }

    if (!ingredients || !Array.isArray(ingredients)) {
      return res.status(400).send('Ingredients array is required');
    }

    const result = await pool.query(
      'INSERT INTO meals (user_id, name, type, ingredients, image) VALUES ($1, $2, $3, $4, $5) RETURNING id, name, type, ingredients, image',
      [userId, name, type, ingredients, image || null]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating meal:', error);
    res.status(500).send('Error creating meal');
  }
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});