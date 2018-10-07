### cmd
- 터미널 (공부필요)
- path에 대한 이해를 알자
```
ctrl + c
```
> 서버끊기
```
dir
```
> 폴더의 구조
- `. : 현재폴더 / .. : 상위폴더`
```
cd ..
```
> 상위폴더로 가기
```
cd 폴더이름
```
> 해당 폴더로 가기
- cd : change directory
```
node t(파일명의 첫번째 알파벳) + tab
```
> 파일명 자동완성
```
npm install * --save
```
> 현재 폴더에서만 사용하도록 * 를 설치
```
npm install * -g
```
> 모든 폴더에서 사용하도록 * 를 설치

# Node
## node 와 npm
- nodejs 검색 후 다운받기 (LTS)
- node를 설치하면 node와 npm이 함께 설치됨
- npm(node package manager) : 플러그인, 저장소 (불특정 다수들이 개발해놓은 것을 가져다 쓰는 것)
> cmd(터미널) 이용
```
node -v
```
> node 버전확인(대규모.핵심패치.버블패치)
```
npm -v
```
> npm 버전확인
```
node
```
```
console.log('node');  // node
```
> 터미널에서 직접 콘솔찍기
test.js
```
console.log('node');
```
```
node test.js  // node
```
> 파일을 만들어서 콘솔찍기
```
var a = 10;

console.log(a);  // 10
```
### require JS 와 import
- 포함시키는 기능
- require : es5 / import : es6
- node는 require js를 탑재함
test.js
```
var a = 10;
```
> 변수 a 의 데이터를 다른 파일에서도 사용해보자
```
module.exports = a;
```
> 모듈로 묶어서 내보내기
main.js
```
var a = require('./test.js');
```
> 파일이 다르면 변수가 공유되지 않음 (지역변수와 같은 개념)
```
console.log(a);
```
```
node main.js  // 10
```
test.js
```
var a = 10;
var b = 20;
var c = {x:a, y:b}
```
> 데이터가 많으면 하나의 데이터 묶음(객체,배열)을 만들어 내보냄
```
module.exports = c;
```
> exports는 한번만 가능
main.js
```
console.log(a.x + a.y);  // 30
```
