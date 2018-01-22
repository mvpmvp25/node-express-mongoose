import db from './db';
import router from './router';

const express = require('express');
const bodyParser = require("body-parser"); 
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // 获取post请求参数需要


app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://10.101.90.59:8020');
	res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

router(app);
 
const server = app.listen(8052, "10.101.90.59", function () { // 本机IP
  let host = server.address().address
  let port = server.address().port
  console.log("http://" + host + ":" + port + " ready");
});