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
//prop는 모든 컴포넌트에 존재
export default Green;
