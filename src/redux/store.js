import { createStore } from 'redux';

const initialState = {
  activeItem: 'home'
};



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_ITEM':
      return { ...state, activeItem: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
