const express = require("express"); // 노드에서 "express"를 가져와라
const app = express(); //express함수 실행
//express에는 get이라는 함수가 있는데 데이터를 받을때 사용
// login으로 들어오면 센드안의 메세지를 보내주겠다
app.get("/login", function (req, res) {
  res.send(`id:<input type="text"> pw:<input type="password">`);
});
app.get("/", function (req, res) {
  res.send(`<h1>여기는 home입니다</h1>`);
});
app.get("/adult", function (req, res) {
  const age = Number(req.query.age);
  if (age > 20) {
    res.send(`당신은 성인이므로 출입이 가능합니다.`);
  } else {
    res.send(`애들은 가라...`);
  }
});
app.get("/board/list", function (req, res) {
  let list = "";
  for (let i = 0; i < 30; i++) {
    list += `<li>${i}번째 게시물</li>`;
  }
  res.send(list);
});
app.listen(3001, function () {
  console.log("3001에서 서버가 대기중");
});
