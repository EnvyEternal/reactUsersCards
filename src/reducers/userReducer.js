import ACTION_TYPES from '../actions/actionsType';

const initialState = {
  users:[]
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.DOWNLOAD_USERS: {
      const { users } = state;
      const { data } = action;
      const newUser = {
        ...data,
        id: Date.now(),
      };
      console.log('REDUCER '+{newUser})
      const newUsers = [...users, newUser.results];
      console.log(newUser)
      return { users: newUsers };
    }
    case ACTION_TYPES.NEXT_USERS: {
    
      
      return state ;
    }
    default:
      return state;
  }
};

export default userReducer;
