import React, {Component} from 'react';
import './Makecss.css'; // 단순히 파일연결이기때문에 from 필요없음
import './Makecss.scss';
class Makecss extends Component {  // react component를 상속
  render(){
    let styles = {
      color:'red',
      fontSize:14
    }
    return (
      <div>
      
        <div style={styles}>스타일 적용해보기</div>
        {<div className="box">스타일 적용해보기 2</div>}
        <div className="box2">스타일 적용해보기 3</div>
        <div className="box3">스타일 적용해보기 4</div>
      </div>
    )
  }
}

// div {color:red, font-size:14px}
// {자바스크립쓰겠다}+{객체다} => {{}}
// css를 쓰는공간이아니라 javascript에서 쓰이는 방식으로 씀
// 자바스크립트에서 - 하이픈은 마이너스로 인식

//className이라고해야 경고가 안뜸
export default Makecss;

//<div className="box">스타일 적용해보기 2</div>
// 나중에쓸 코드를 아래에 모아서 주석처리해놓는것도 방법
