/*
with express
아까는 javascript로 개발하는 느낌
지금은 jquery로 개발하는 느낌
*/

const express = require('express');
const app = express();
// const express = require('express')(); 와 같음
const path = require('path');
// 파일의 path를 알아서 찾아줌

app.listen(9002);

app.set('views');
app.set('view engine','ejs');
// 엔진세팅

app.use(express.static('public')); // 정적파일을 모아놓는 폴더를 만들겠다
// 미들웨어


// 라우트 (최상단 접속) - 갈래길들로 갈라지는 곳
// GET(조회) POST(입력) PUT(수정) DELETE(삭제) : 통신메소드
// 처음에 주소치고 들어오는건 무조건 get
app.get('/', (req,res)=>{
  // console.log('a');
  // res.send('hi');  // 응답으로 이걸 보내줘라
  // res.send('<a href="/blog">블로그 이동</a>');
  // res.sendFile(path.join(__dirname+'/index.html'));  // 절대경로를 써줘야함
  // console.log(path);
  // console.log(__dirname);
  res.render('index',{
    title : '노드개발하기',
    number : [10, 20, 30, 40]
  });
  // views파일을 /(루트폴더) 로 정해놨음
  // sendfile은 데이터를 보내줄수없음 render는 가능 그래서 템플릿을 씀
}) 
// path : 현재 경로를 알려줌 (위치) -> node의 path -> c:~/node
// __dirname : node기준의 path -> node안에 path -> node/

app.get('/blog', (req,res)=>{
  // res.send('blog');
  res.send('<a href="/">메인 이동</a>');
})