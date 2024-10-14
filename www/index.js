import express from "express";
import { fileURLToPath } from "url"
import path from "path"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/about', (req, res) => {
    res.render('about')
})

const data = (req) => ({
    username: req.params.username,
    hobbies: ['football', 'skate', 'basketball']
})

app.get('/user/:username', (req, res) => {
    res.render('user', data(req));
})

const PORT = 3000;
app.listen(3000, () => {
    console.log(`Server started: http://localhost:${PORT}`)
})