const initialState = {
  items: [],
  loading: false,
};

const photosReduser = (state = initialState, action) => {
  switch (action.type) {
    case "photos/load/start":
      return {
        ...state,
        loading: true,
      };
    case "photos/load/success":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default photosReduser;
