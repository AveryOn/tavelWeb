const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

const corsOptions = cors({ origin: '*', methods: 'GET, POST, PUT' });

app.use(corsOptions);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
