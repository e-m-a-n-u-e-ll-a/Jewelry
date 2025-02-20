const express = require('express');
const XLSX = require('xlsx');
const cors = require('cors');

const app = express();
app.use(cors());
app.get('/data', (req, res) => {
    const workbook = XLSX.readFile('./products_export.csv');
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const jsonData = XLSX.utils.sheet_to_json(sheet);
    res.json(jsonData);
});

app.listen(3000, () => console.log('Сървърът работи на порт 3000'));