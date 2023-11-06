// slotReducer.js

import { ADD_SLOT, REMOVE_SLOT } from '../redux/slotActions';

const initialState = {
  slots: [],
};

const slotReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SLOT:
      return {
        ...state,
        slots: [...state.slots, action.payload],
      };
    case REMOVE_SLOT:
      return {
        ...state,
        slots: state.slots.filter((slot) => slot !== action.payload),
      };
    default:
      return state;
  }
};

export default slotReducer;
