import { UPDATE_USER, SAVE_USER } from './actions';

const initialState = {
  user: {
    name: '',
    email: '',
    age: '',
    contacts: [], 
    orders: [] 
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SAVE_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;