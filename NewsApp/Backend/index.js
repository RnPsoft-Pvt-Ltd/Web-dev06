const fs = require('fs').promises;
const express = require('express');
const app = express();

async function getStoredItems() {
        const raw = await fs.readFile('Dummy.json');
        const data = JSON.parse(raw);
        return data;
}

app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
});

app.get('/', async (req, res) => {
        const data = await getStoredItems();
        res.json(data);
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
