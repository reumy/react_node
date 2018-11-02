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
// jsx 새로운 문법을 넣고싶으면 {}를 넣어야함, 즉 자바스크립트를 쓰고싶으면 괄호를 쓰면됨 / if, for문 사용불가능
// 조건을 만족하면 ? 참 : 거짓 / num이 20보다 크면 name 아니면 'False'
// num이 5보다 크면 name을 보여줘 num>5 && name (맞았을때만 행해라)
export default Main;
