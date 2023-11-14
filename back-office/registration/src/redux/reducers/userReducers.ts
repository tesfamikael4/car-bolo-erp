// redux/reducers/userReducer.ts

const initialState = {
    user: null,
  };
  
  const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'REGISTER_USER':
        return {
          ...state,
          user: action.payload,
        };
  
      // Add other cases as needed
  
      default:
        return state;
    }
  };
  
  export default userReducer;
  