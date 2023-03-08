const express = require("express");
const app = express();
app.get("/login", function (req, res) {
  res.send(`id : <input type="text"> pw : <input type="password">`);
});
app.get("/join", function (req, res) {
  res.send(`<form method="get" action="join-process">id : <input type="text" name="userID"> pw : <input type="password" name="userPW"><button>회원가입</button></form>`);
});
app.get("/join-process", function (req, res) {
  const id = req.query.userID;
  const pw = req.query.userPW;
  console.log(id, "===", pw);
  // db입력하기...
  // db에 입력이 잘되었다고 db에서 알려줌...
  //
  res.send("회원가입 되었습니다.");
});

app.get("/", function (req, res) {
  res.send(`<h1>여기는 home 입니다.</h1>`);
});
app.get("/board/list", function (req, res) {
  let list = "";
  for (let i = 0; i < 30; i++) {
    list += `<li>${i}번째 게시물</li>`;
  }
  res.send(list);
});

app.get("/adult", function (req, res) {
  const age = Number(req.query.age);
  if (age > 20) {
    res.send(`당신은 성인이므로 출입이 가능합니다.`);
  } else {
    res.send(`애들은 가라...`);
  }
});
app.listen(3001, function () {
  console.log("3001에서 서버가 대기중");
});
