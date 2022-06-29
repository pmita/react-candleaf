const initialState = {
  color: '',
};

// eslint-disable-next-line default-param-last
const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload };
    default:
      return { ...state, color: 'blue' };
  }
};

export default colorReducer;
