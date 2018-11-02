import React, {Component, Fragment} from 'react';
import Main from './Main';
import Second from './Second';
import Makecss from './Makecss';
import Orange from './Orange';

class Hello extends Component {
  render(){
    return (
      <Fragment>
        <h1 className="box">React Class</h1>
        <Main />
        <Second />
        <Makecss />
        <input type="text" />
        <Orange />
      </Fragment>
    )
  }
}

export default Hello;
