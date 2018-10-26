# 서버사이드 랜더링 방식 (node)
- [mysql](https://www.mysql.com/)다운
### 프레임워크
- 웹개발을 쉽게 사용하는 것
- node 의 express, java 의 spring, php 의 라라벨
```
npm install express --save
```
> express 다운
server.js
```
const express = require('express');
```
```
const app = express();
```
> 실행이 됨과 동시에 app에 모든 express 기능이 탑재됨
```
app.listen(9090);
```
```
node server.js
```
- 접속
```
localhost:9090  // Cannot GET
```
```
npm install ejs --save
```
```
app.set('views',__dirname + '/template');
```
> 기본 폴더명을 views에서 template로 바꿈
- dirname : 현재 파일의 path가 정해짐
```
app.set('view engine', 'ejs');
```
```
app.get('/',(req,res)=>{
  res.render('main',{
    title1 : 'node project',
    title2 : 'react'
  })
})
```
> 첫화면( / )에 main 이라는 파일을 그려라
template/main.ejs
```
<html>
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  <h1>hello world</h1>
  <h2><%= title1 %></h2>
  <h2><%= title2 %></h2>
</body>
</html>
```
> 화면에 hello world, node project, react 가 출력됨
```
let title1 = 'node project';
let title2 = 'react';

res.render('main',{
  title1 : title1,
  title2 : title2  
})
```
> 키 : 변수 형태 / 화면에 위와 동일하게 출력
```
let title = ['node project', 'react'];

res.render('main',{
  title1 : title[0],
  title2 : title[1] 
})
```
> 동일하게 출력
```
let title = ['node project', 'react'];

res.render('main',{
  title : title
})
```
main.ejs
```
<h1>hello world</h1>
<h2><%= title[0] %></h2>
<h2><%= title[1] %></h2>
```
> 동일하게 출력
```
<h1>hello world</h1>
<% for (var i=0; i<title.length; i++){ %>
<h2><%=title[i]%></h2>
<% } %>
```
> 동일하게 출력

### DB(mysql)연결
- mysql 사이트에서 워크벤치 다운
1. 워크벤치 접속해서 DB 만들어 접속
2. 원통모양 클릭
- 하나의 데이터베이스 = 하나의 스키마
- season1 이름의 DB 생성
- utf8mb4 - general ci
3. season1 선택하고 tables 선택하고 위에 table 만들기 클릭
- test 이름의 table 생성
4. column 더블클릭
- id, int(숫자), pk(프라이머리키, 고유키, 가장 중요한키), nn(not null, 안쓰는걸 허용하지않음, 값이 반드시 들어가야함), ai(자동으로 숫자증가)
- title, varchar(45)(문자로 45자까지 작성가능)
> id 와 title 만듬
```
npm install mysql
```
> mysql 설치
```
const mysql = require('mysql');
const connection = mysql.createConnection({
  host : 'localhost', // 127.0.0.1
  user : 'root', // id
  password : '****',
  port : 9999,
  database : 'season1' // 스키마
});
```
> mysql 연결 / 정보 = 객체
```
const connection = mysql.createConnection({...})
```
> connection 객체가 생성됨 즉, mysql을 커넥션 하기위한 모든 기능이 탑제됨
```
connection.connect((err)=>{
  if (err) {
    console.log(err);
    return;
  }
  console.log('연결됨');
});
```
> 연결됐으면 이걸 해라 (cmd)
main.ejs
```
<h1>hello world</h1>
<form action="/add" method="POST">
  <input type="text" name="title" />
  <button type="submit">입력</button>
</form>
<% for (var i=0; i<result.length; i++){ %>
<h2><%=result[i].title %></h2>
<% } %>
```
> 버튼을 누르면 add페이지로 넘어감<br /> form태그 안에 있는 버튼은 기본(디폴드)으로 버튼을 누르면 무조건 전송됨(submit) 버튼타입을 하고싶으면 type="button"을 해주어야 함
- action : 해당 주소로 보냄
- GET : 암호화되지않고 보냄
- POST : 암호화되서 보냄
```
app.use(bodyParser.urlencoded({extended : true}));
```
> 미들웨어 : 중간에 실행하는 것, 서버가 뜨기전에 세팅
```
app.get('/',(req,res)=>{
  connection.query('SELECT * FROM test',(err,rows)=>{
    if (err) {
      console.log(err);
      return;
    }
    console.log(rows);
    res.render('main',{
      result : rows,
    })
  });
})
```
> mysql문을 가져와서 연결해서 쿼리문을 날려라 즉, 유저가 / 폴더에 오는 순간 쿼리를 날려서 데이터를 가져와서 데이터를 화면을 그릴때 보냄 보낸데이터를 가지고 화면에 띄워줌
<br />(err, rows)에 rows는 resultes 로도 사용가능 한줄씩이 결과니까<br />sql은 대문자로 소문자는 테이블명같은 다른것들을 쓰면 가독성에 좋음
```
app.post('/add',(req,res)=>{
  console.log(req.body);
  res.send('/ 로 부터 받은 데이터는 '+req.body.title);
  })
})
```
> input에 aa를 입력하고 버튼을 누르면 /add 페이지로 넘어가면서 '/로 부터 받은 데이터는 aa 라고 표시됨
```
app.post('/add',(req,res)=>{
  console.log(req.body);
  connection.query(`INSERT INTO test (title) values ("${req.body.title}")`,(err,rows)=>{
    if (err) {
      console.log(err);
    } 
    res.redirect('/');
  })
})
```
> input에 aa를 입력하고 버튼을 누르면 바로 밑에 aa 가 표시됨<br />redirect를 통해 add에 갔다가 다시 첫화면으로 돌아와서 실시간으로 동기화 된것처럼 보이게 함
- 여러가지 방법
```
`INSERT INTO test (title) values ("${req.body.title}")`
```
> es6 방법

### TIP
- ejs는 주석이 되어있으면 오류남
- mysql
```
SELECT (조회) 목록
INSERT (입력) 글쓰기
UPDATE (수정)
DELETE (삭제)
```
- 게시판 만들어보기 (제목, 내용)
- DB책 사서 공부
- NoSQL 공부 (키와 벨류로 구성된 문법)
- 미들웨어 공부
