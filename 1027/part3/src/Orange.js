import React, {Component} from 'react';
import Green from './Green';

/*
리액트는 데이터 기반으로 화면을 제작한다
virtual DOM : 데이터의 변화가 없으면 변경을 하지 않음
태그를 메모리상에 저장해둔다.
그리고 해당 태그들의 값이 변경이되면 변경된 태그만 새로 그린다.

props -> 상위 컴포넌트로 부터 받은 데이터
state -> 자기자신(컴포넌트) 에서 만든 데이터
*/

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
//그린컴포넌트에 open이라는 이름으로 title을 주겠다
export default Orange;
