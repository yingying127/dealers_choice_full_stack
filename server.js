const { syncAndSeed, models: { Noodle } } = require('./db/db')
const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/noodles', async(req, res, next) => {
    try {
        res.status(201).send(await Noodle.findAll())
    }
    catch(ex) {
        next(ex)
    }
})

app.post('/api/noodles', async(req, res, next) => {
    try {
        res.status(201).send(await Noodle.create(req.body))
    }
    catch(ex) {
        next(ex)
    }
})

const init = async() => {
    try {
        await syncAndSeed();

        const port = process.env.PORT || 3000;
        app.listen(port, ()=> console.log(`listening on port ${port}`));
    }
    catch(ex) {
        console.log(ex)
    }
}

init()  