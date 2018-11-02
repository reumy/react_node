# React
```
npm install create-react-app -g
```
> 프로젝트가 생성될 디렉토리에 리액트 설치
```
npm install create-react-app@원하는 버전 -g
```
> 원하는 리액트 버전 설치
```
create-react-app part3
```
> 프로젝트명으로 디렉토리 생성
```
cd part3
```
> part3 디렉토리 접속
```
npm start
```
> 리액트 실행
- 브라우저 자동실행 됨
- src  폴더 안에 파일 전부 삭제
- react를 사용할때는 서버가 필요하므로 node를 띄워서 서버를 잡아줌
- index.js를 가장 먼저 찾음 index.js가 시작점
- index 가 hello를 찾고 hello가 main을 찾음
src/index.js
> require('package') 대신 es6 이후버전은 import, export를 사용
```
import React from 'react';
```
> React 라는 변수로 react 기능을 가져옴
```
import ReactDOM from 'react-dom';
```
> ReactDOM 에 react를 넣음
```
ReactDOM.render(<h1>React Application</h1>,document.getElementById('root'));
```
> public 폴더에 index.html의 root 아이디 안에 h1태그를 넣음 / 화면에 React Application 이 표시됨
```
function Hello(){
  return <h1>React Application</h1>;
}
```
또는
```
class Hello extends React.Component {
  render(){
    return <h1>React Class</h1>
  }
}
```
> 자바스크립트는 객체지향 언어가 아님 자바스크립트에서 클래스를 만들때는 여러가지 방법이 있는데 함수를 가지고 클래스를 표현할때는 가장 첫번째 알파벳을 대문자로 시작함
- extends : react component를 상속
```
ReactDOM.render(<Hello/>,document.getElementById('root'));
```
> \<Hello/\>는 JSXML<br />화면에 React Application 또는 React Class가 표시됨
src/index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';

ReactDOM.render(<Hello/>,document.getElementById('root'));
```
src/Hello.js
```
import React from 'react';
```
> js파일끼리는 서로 모르니까 다시 react를 가져와줘야함
```
export default class Hello extends React.Component {
  render(){
    return (
      <div>
        <h1>React Class</h1>
      </div>
    )
  }
}
```
> return 안에 문법은 JSX 문법 (html이 아니고 엄밀히 따지면 JSX문법)
- return을 괄호로 묶으면 여러개를 리턴할 수 있음
- 리액트 컴포넌트는 하나의 태그로 부터 시작함 (div로 감싸줌)<br />16버전 이후부터는 Fragment가 생겨 <React.Fragment>로 사용가능 Fragment 를 사용하면 불필요하게 div로 묶일 필요가 없음 (요소검사를 해보면 따로따로 태그가 하나씩 나옴)
```
import React, {Component, Fragment} from 'react';
class Hello extends Component {
  render(){
    return (
      <Fragment>
        <h1>React Class</h1>
      </Fragment>
    )
  }
}

export default Hello;
```
> 비할당 구조 ( { } ) 로 뽑아오면 간단하게 React.를 생략가능
> export default를 통해 밖으로 내보냄

- 비구조화 할당방식
```
const a = {num1:10}

// 비구조화 할당방식
const {num1} = a;
console.log(num1);

// 원래방식
const b = a.num1; 
```
Hello.js
```
import React, {Component, Fragment} from 'react';
import Main from './Main';

class Hello extends Component {
  render(){
    return (
      <Fragment>
        <h1>React Class</h1>
        <Main />
      </Fragment>
    )
  }
}

export default Hello;
```
> Main 추가
Main.js
```
import React from 'react';

class Main extends React.Component {  // react component를 상속
  render(){
    let name = 'React';
    name = 'Node';

    let num = 10;
    // num > 5 && name
    // num > 5 ? name : ''

    return <h2>{num>5 && name} Project</h2>
  }
}

export default Main;
```
- jsx 새로운 문법을 넣고싶으면 { }를 넣어야함, 즉 자바스크립트를 쓰고싶으면 괄호를 쓰면됨 
- if, for문 사용불가능
- 조건을 만족하면 ? 참 : 거짓 / num이 20보다 크면 name 아니면 'False'
- num이 5보다 크면 name을 보여줘 num>5 && name 즉, 맞았을때만 행해라
> 화면에 Node Project가 출력 됨
Hello.js
```
import Second from './Second';
...
<Second />
...
```
```
import React, {Component} from 'react';

class Second extends Component {
  render(){

    let check = 0;

    return(
      <div>
        {
          (()=>{
            if (check === 0) return 'a';
          })()
        }
        Second Component
      </div>
    )
  }
}

export default Second;
```
> 화면에 aSecond Component 출력
- 리액트에서 같다는 무조건 ===

### CSS를 적용하는 여러가지 방법
Hello.js
```
import React, {Component, Fragment} from 'react';
import Main from './Main';
import Second from './Second';
import Makecss from './Makecss';

class Hello extends Component {
  render(){
    return (
      <Fragment>
        <h1 className="box">React Class</h1>
        <Main />
        <Second />
        <Makecss />
        <input type="text" />
      </Fragment>
    )
  }
}

export default Hello;
```
Makecss.css
```
.box {color:blue; font-size:30;}
```
Makecss.js
```
import React, {Component} from 'react';
```
```
import './Makecss.css';
```
>  단순히 파일연결이기때문에 from 필요없음
```
class Makecss extends Component {
  render(){
    let styles = {
      color:'red',
      fontSize:14
    }
    return (
      <div>
        <div style={{color:'red', fontSize:14}}>스타일 적용해보기</div>
        <div style={styles}>스타일 적용해보기1</div>
        {/*<div className="box">스타일 적용해보기 2</div>*/}
        <div className="box2">스타일 적용해보기 3</div>
        <div className="box3">스타일 적용해보기 4</div>
      </div>
    )
  }
}

export default Makecss;

//<div className="box">스타일 적용해보기 2</div>
```
public/index.html
```
> 정적파일은 index.html에 연결
<link rel="stylesheet" type="text/css" href="%PUBLIC_URL%/style.css" />
```
> %PUBLIC_URL% 은 public 폴더를 가르킴
public/styel.css
```
.box2 {color:green; font-size:20px;}
```
- {자바스크립쓰겠다}+{객체다} => {{}}
- css를 쓰는공간이아니라 javascript에서 쓰이는 방식으로 씀
- 자바스크립트에서 - 하이픈은 마이너스로 인식
- className 이라고해야 경고가 안뜸
- css는 랜더링 되어있는거기때문에 다른데에서 사용해도 됨
- 나중에쓸 코드를 아래에 모아서 주석처리해놓는것도 방법
- {/* */} 이런 방식의 주석도 있음

### sass
```
npm install node-sass --save
```
```
npm start
```
src/Makecss.scss
```
$select-color : orange;
.box3 {color:$select-color; font-size:20px;}
```
Makecss.js
```
import './Makecss.scss';
```
### 연결
Hello.js
```
import Orange from './Orange';
...
<Orange />
```
Orange.js
```
import React, {Component} from 'react';
import Green from './Green';

class Orange extends Component {
  render(){
    let title = '10';
    return (
      <div>
        <div>{title}</div>
        <Green open={title} number="20" />
      </div>
    )
  }
}

export default Orange;
```
> Green 컴포넌트에 open이라는 이름으로 title을 줌
- 리액트는 데이터 기반으로 화면을 제작한다
- virtual DOM : 데이터의 변화가 없으면 변경을 하지 않음
- 태그를 메모리상에 저장해둔다.
- 그리고 해당 태그들의 값이 변경이되면 변경된 태그만 새로 그린다.
- props → 상위 컴포넌트로 부터 받은 데이터
- state → 자기자신(컴포넌트) 에서 만든 데이터
Green.js
```
import React, {Component} from 'react';

class Green extends Component {
  render(){
    console.log(this.props);
    return (
      <div>
        전달받은 데이터는 {this.props.open}와 {this.props.number} 이다.
      </div>
    )
  }
}

export default Green;
```
> prop는 모든 컴포넌트에 존재
- 결과
```
10
전달받은 데이터는 10와 20이다.
```

## TIP
- eslint 협업할땐좋은데 너무 강제성이 짙음
- 컴포넌트는 부품, 컴포넌트 분류를 통해 협업이 가능하다
- 과제 : 컴포넌트 스니펫만들어오기
