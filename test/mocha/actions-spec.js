import { Map, fromJS } from 'immutable';
import { expect } from 'chai';

import makeStore from '../../src/redux/store/store';
import { setPlants } from '../../src/redux/actions/actions';

describe('Action creators', () => {

  describe('setPlants', () => {

    it('Communicates intent to set plants', () => {
      const store = makeStore();
      const plants = [ 'tree', 'bush', 'daisy' ];

      store.dispatch(setPlants(plants));

      expect(store.getState().get('plants')).to.equal(fromJS({
        fetched: true,
        plants: [ 'tree', 'bush', 'daisy' ]
      }));

    });
  });
});
