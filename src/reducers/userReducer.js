import ACTION_TYPES from '../actions/actionsType';

const initialState = {
  users:[]
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.DOWNLOAD_USERS: {
      const { users } = state;
      const { data } = action;
      
      return { ...state,
        users:  data };
    }
    case ACTION_TYPES.NEXT_USERS: {
    
      
      return state ;
    }
    default:
      return state;
  }
};

export default userReducer;
