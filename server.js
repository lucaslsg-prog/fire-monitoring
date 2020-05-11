const express = require('express')//para API REST
const app = express(); //carregar dados
const http = require("http").createServer(app);
const io = require('socket.io')(http);
const indexRouter = require("./routes/index")(io);

app.engine(".html",require("ejs").renderFile);//reconhecer arquivos html
app.use("/js",express.static(__dirname + '/public/js/'));//mostra caminho do projeto
app.use("/css",express.static(__dirname + '/public/css/'));
app.use("/scripts",express.static(__dirname + '/node_modules/'));
app.use(indexRouter);

const port = 3000;
http.listen(port,()=>{
  console.log(`servidor ligado na porta: ${port}`);
})

