/*
웹서버
HTTP 1.1 -> 1997 -> request response (기본적인 컨셉) 많은 브라우저들이 1.1에 맞춰져있어서 2.0을 잘 쓰지않음

앱 : 고유한 디바이스 (ex.휴대폰)
*/

var http = require('http');  // 모듈화를 시켜놔서 슬래시가 필요없음 // 변수로 감싸면 http 객체가 됨

http.createServer(function(req,res){
  // console.log(req); // 접속경로,ip,브라우저 등을 알 수있음
  res.end('hello world');  // 응답
}).listen(9001); // 9001에 들어오면 이것을 볼 수 있음
// 서버를 만들어서 대기(listen)시키겠다 누군가 접속할테니까
// 포트 : 서버에 들어갈수있는 문 (생략하고 들어가는건 무조건 국제표준 80) 1~1000 거의 예약포트
// request : 유저가줌 response : 내가줌
// runtime : 실행중
// 접속 : localhost:9001
// 수정을 하면 서버를 죽였다가 다시 띄워야함
// 응답이 없으면 무한루프에 빠짐