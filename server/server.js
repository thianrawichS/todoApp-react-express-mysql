const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const promisePool = require('./db')

require('dotenv').config({path: '../client/.env'});

const app = express();
const port = process.env.VITE_APP_SERVER_PORT;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

// get to-do
app.get('/todo', async (req, res) => {
    const sql = "SELECT * FROM tb_todo_list ORDER BY id";

    try {
        const [todoList] = await promisePool.query(sql);
        res.json(todoList);
    } catch (err) {
        console.log('Error executing get to-do query', err)
        res.send('Error fetching to-do list')
    }
})

// create to-do
app.post('/todo', async (req, res) => {
    const sql = "INSERT INTO tb_todo_list SET title = ?, detail = ?";
    const {title, detail} = req.body;

    try {
        const [result] = await promisePool.query(sql, [title, detail]);
        res.json(result);
    } catch (err) {
        console.log('Error executing create to-do query', err);
        res.send('Error creating todo')
    }
})

// update to-do
app.put('/todo/:id', async (req, res) => {
    const sql = "UPDATE tb_todo_list SET title = ?, detail = ? WHERE id = ?";
    const id = req.params.id;
    const {title, detail} = req.body;

    try {
        const [result] = await promisePool.query(sql, [title, detail, id]);
        res.json(result)
    } catch (err) {
        console.log('Error executing update todo query', err);
        res.send('Error updating todo')
    }
})

// delete to-do
app.delete('/todo/:id', async (req, res) => {
    const sql = "DELETE FROM tb_todo_list WHERE id = ?";
    const id = req.params.id;

    try {
        const [result] = await promisePool.query(sql, [id]);
        res.json(result)
    } catch (err) {
        console.log('Error executing delete todo query', err);
        res.send('Error deleting todo')
    }
})