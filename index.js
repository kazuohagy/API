const express = require('express');
const server = express();

server.get('/usuario', (req, res) => {
    return res.json({usuario:'mario', idade:20, altura:1.89});
});

server.get('/idade', (req, res) => {
    return res.json({idade:20});
});

server.listen(3000), () => {
    console.log('Server is running on port 3000');
}