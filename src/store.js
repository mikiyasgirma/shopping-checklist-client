export const actionCreators = {
  addToList: (data) => ({ type: "ADD_TO_LIST", payload: data }),
  addToBasket: (data) => ({ type: "ADD_TO_BASKET", payload: data }),
  removeItem: (data) => ({ type: "REMOVE_ITEM", payload: data }),
  clearItems: () => ({ type: "CLEAR_ITEMS" }),
};

const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return {
        ...state,
        items: [
          ...state.items,
          {
            value: action.payload,
            inBasket: false,
          },
        ],
      };
    case "CLEAR_ITEMS": {
      return {
        items: [],
      };
    }
    default:
      return state;
  }
};
