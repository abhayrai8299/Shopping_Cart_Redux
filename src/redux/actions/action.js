export const ADD_TO_CART = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};
export const REMOVE_CART = (id) => {
    return {
      type: "REMOVE_CART",
      payload:id,
    };
  };
  