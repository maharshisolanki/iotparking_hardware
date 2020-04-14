import {todosRef, slotsRef} from '../config/firebase';
import {FETCH_TODOS, FETCH_SLOTS} from './types';

export const addToDo = newToDo => async dispatch => {
  todosRef.push().set(newToDo);
};

export const completeToDo = completeToDoId => async dispatch => {
  todosRef.child(completeToDoId).remove();
};

// export const fetchToDos = () => async dispatch => {
//   todosRef.on("value", snapshot => {
//     dispatch({
//       type: FETCH_TODOS,
//       payload: snapshot.val()
//     });
//   });
// };


export const fetchSlots = dispatch => {
  slotsRef.on("value", snapshot => {
    dispatch({
      type: FETCH_SLOTS,
      payload: snapshot.val()
    });
  });
};

