import { Map, List, fromJS } from 'immutable';
import { expect } from 'chai';

import makeStore   from '../../src/redux/store/store';
import { setUser, removeUser } from '../../src/redux/actions/actions';

describe('authentication', () => {

  const store = makeStore();

  it('defaults to user not logged in', () => {
    expect(store.getState()).to.equal(Map({ loggedIn: false }));
  });

  it('logs user in when none is logged in already', () => {

    // DEFINE user
    const user = {
      given_name: 'Eric',
      family_name: 'Churchill',
    };

    // DISPATCH Action to store
    store.dispatch(setUser(user));

    expect(store.getState()).to.equal(Map({
      loggedIn: true,
      user: Map({
        firstName: 'Eric',
        lastName: 'Churchill',
        timezone: undefined,
        name: undefined,
        id: undefined,
        email: undefined,
        image: undefined
      })
    }));
  });

  it('forbids user login when one is already signed in', () => {

    const user = {
      given_name: 'Phoebe',
      family_name: 'Maio'
    };

    store.dispatch(setUser(user));

    expect(store.getState()).to.equal(Map({
      loggedIn: true,
      user: Map({
        firstName: 'Eric',
        lastName: 'Churchill',
        timezone: undefined,
        name: undefined,
        id: undefined,
        email: undefined,
        image: undefined
      })
    }));
  });

  it('logs user out when logout action is triggered', () => {
    store.dispatch(removeUser());

    expect(store.getState()).to.equal(Map({ loggedIn: false }));
  });
});
