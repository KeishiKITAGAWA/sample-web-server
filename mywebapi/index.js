// read express module
const express = require('express');

// create express ap
const app = express();

// Webフォルダの中身を公開する
app.use(express.static('web'));

// when you access route(http://localhost/), respond with TODO list
app.get('/api/v1/list', (req, res) => {
    // クライアントに送るJSONデータ
    const todolist = [
        { title: 'JavaScriptを勉強する', done: true },
        { title: 'Node.jsを勉強する', done: false },
        { title: 'Web APIを作る', done: false }
    ];

    //JSONを送信する
    res.json(todolist);
});

// build a server with port:3000
app.listen(3000, () => console.log('Listening on port 3000'));

