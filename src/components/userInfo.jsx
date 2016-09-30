import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.isLoggedIn){
      return(
        <div>
          <span>{this.props.userName}</span>
          <img src={this.props.userImg} style={{height:'50px', width:'50px'}}/>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}