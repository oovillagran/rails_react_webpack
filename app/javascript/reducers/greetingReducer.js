const initialState = {
  randomGreeting: '',
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RANDOM_GREETING':
      console.log('Reducer handling SET_RANDOM_GREETING action:', action.payload);
      return { ...state, randomGreeting: action.payload };
    default:
      return state;
  }
};

export default greetingReducer;
