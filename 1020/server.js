const express = require('express');
const app = express(); // 실행이 됨과 동시에 app에 모든 express 기능이 탑재됨
const bodyParser = require('body-parser');

// mysql 연결하기
const mysql = require('mysql');
const connection = mysql.createConnection({ // connection 객체가 생성된다. 즉, mysql을 커넥션 하기위한 모든 기능이 탑제됨
  host : 'localhost', // 127.0.0.1
  user : 'root', // id
  password : '0000',
  port : 9999,
  database : 'season1' // 스키마
});
// 정보 = 객체

connection.connect((err)=>{ // 연결됐으면 이걸 해라
  if (err) {
    console.log(err);
    return;
  }
  console.log('연결됨');
});
/*
connection.query('SELECT * FROM test',(err,rows)=>{
  if (err) {
    console.log(err);
    return;
  }
  /*
  [ { id: 1, title: 'node project'},
  {id: 2, title: 'react'} ]
  로우니까 배열로 되어있는거 
  *//*
  console.log(rows);
});
*/
app.listen(9090);

app.set('views',__dirname + '/template'); // 현재파일의 path가 정해짐 dirname / 기본 폴더명을 views에서 template로 바꿈
app.set('view engine', 'ejs');

// 미들웨어 : 중간에 실행하는것 서버가 뜨기전에 세팅하는 것
app.use(bodyParser.urlencoded({extended : true}));

app.get('/',(req,res)=>{ // 슬레시에서 main이라는 파일을 그려라

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

  // let title1 = 'node project';
  // let title2 = 'react';
  // let title = ['node project', 'react']; // 데이터를 묶음
/*
  res.render('main',{ 
    // title1 : 'node project',
    // title2 : 'react' 
    /*
    title1 : title1, // 키값 : 변수명
    title2 : title2
    */
    /*
    title1 : title[0],
    title2 : title[1]
    *//*
    // title : title,
  }); 
*/
});

app.post('/add',(req,res)=>{
  console.log(req.body);
  // res.send('/ 로 부터 받은 데이터는 '+req.body.title);
  connection.query(`INSERT INTO test (title) values ("${req.body.title}")`,(err,rows)=>{ // 추가 es6
    if (err) {
      console.log(err);
    } 
    res.redirect('/'); // post에 갔다가 다시 / 로 온것
  })
})

/*
mysql

SELECT (조회) 목록
INSERT (입력) 글쓰기
UPDATE (수정)
DELETE (삭제)

게시판 만들어보기
제목, 내용
DB책 사서 공부
NoSQL 공부 (키와 벨류로 구성되어져있는 문법)
미들웨어 공부 

오늘공부한것 : 서버사이드 랜더링 방식 (node)
*/