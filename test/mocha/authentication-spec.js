import { Map, List, fromJS } from 'immutable';
import { expect } from 'chai';

import makeStore   from '../../src/redux/store/store';
<<<<<<< HEAD
import { setUser } from '../../src/redux/actions/actions';
=======
import { setUser, removeUser } from '../../src/redux/actions/actions';
>>>>>>> b81ffc95018f3c1aba4f1a1fcabb5630bd632849

describe('authentication', () => {

  const store = makeStore();

  it('defaults to user not logged in', () => {
    expect(store.getState()).to.equal(Map({ loggedIn: false }));
  });

  it('logs user in when none is logged in already', () => {

    // DEFINE user
    const user = {
      firstName: 'Eric',
<<<<<<< HEAD
      lastName: 'Churchill',
=======
      lastName: 'Churchill'
>>>>>>> b81ffc95018f3c1aba4f1a1fcabb5630bd632849
    };

    // DISPATCH Action to store
    store.dispatch(setUser(user));

    expect(store.getState()).to.equal(Map({
      loggedIn: true,
      user: Map({
        firstName: 'Eric',
        lastName: 'Churchill',
        facebookId: undefined,
<<<<<<< HEAD
        email: undefined
=======
        email: undefined,
        image: undefined
>>>>>>> b81ffc95018f3c1aba4f1a1fcabb5630bd632849
      })
    }));
  });

  it('forbids user login when one is already signed in', () => {

    const user = {
      firstName: 'Phoebe',
      lastName: 'Maio'
    };

    store.dispatch(setUser(user));

    expect(store.getState()).to.equal(Map({
      loggedIn: true,
      user: Map({
        firstName: 'Eric',
        lastName: 'Churchill',
        facebookId: undefined,
<<<<<<< HEAD
        email: undefined
      })
    }));
  });
=======
        email: undefined,
        image: undefined
      })
    }));
  });

  it('logs user out when logout action is triggered', () => {
    store.dispatch(removeUser());

    expect(store.getState()).to.equal(Map({ loggedIn: false }));
  });
>>>>>>> b81ffc95018f3c1aba4f1a1fcabb5630bd632849
});
