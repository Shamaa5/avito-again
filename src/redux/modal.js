const initialState = {
  items: [],
  loading: false,
};

const modalReduser = (state = initialState, action) => {
  switch (action.type) {
    case "modalPhoto/load/start":
      return {
        ...state,
        loading: true,
      };
    case "modalPhoto/load/success":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "comments/upload/start":
      return {
        ...state,
        items: {
          ...state.items,
          comments: [...state.items.comments, action.payload],
        },
      };
    default:
      return state;

  }
};

export default modalReduser;
