import {FETCH_TODOS, FETCH_SLOTS} from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_TODOS:
      return action.payload;
    case FETCH_SLOTS:
      return action.payload;
    default:
      return state;
  }
};