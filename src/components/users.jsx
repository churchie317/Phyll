import UserCard from './user-card.jsx';
import React from 'react';

export default class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let users = this.props.admin;

    if (users) {
      users = users.toArray();
      return(
        <div className={ 'user-cards' }>
          { users.map( user => {
            return (
              <UserCard user= { user }/>
            );
          }) }
        </div>
      );
    } else {
      return null;
    }
  }
}
