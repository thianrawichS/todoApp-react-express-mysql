const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const promisePool = require('./db')

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

// get to-do
app.get('/todo', async (req, res) => {
    const sql = "SELECT * FROM tb_todo_list ORDER BY id";
    let todoList;

    try {
        [todoList] = await promisePool.query(sql)
    } catch (err) {
        console.log('Error executing get to-do query', err)
    }

    res.json(todoList);
})

// create to-do
app.post('/todo', async (req, res) => {
    const sql = "INSERT INTO tb_todo_list SET title = ?, detail = ?";
    const {title, detail} = req.body;

    try {
        await promisePool.query(sql, [title, detail]);
    } catch (err) {
        console.log('Error executing create to-do query', err);
    }

    res.send('Todo created successfully');
})

// update to-do
app.put('/todo/:id', async (req, res) => {
    const sql = "UPDATE tb_todo_list SET title = ?, detail = ? WHERE id = ?";
    const id = req.params.id;
    const {title, detail} = req.body;

    try {
        await promisePool.query(sql, [title, detail, id]);
    } catch (err) {
        console.log('Error executing update todo query', err);
    }

    res.send('Update todo successfully');
})

// delete to-do
app.delete('/todo/:id', async (req, res) => {
    const sql = "DELETE FROM tb_todo_list WHERE id = ?";
    const id = req.params.id;

    try {
        await promisePool.query(sql, [id]);
    } catch (err) {
        console.log('Error executing delete todo query', err);
    }

    res.send('Delete todo successfully');
})