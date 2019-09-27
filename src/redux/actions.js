import actionTypes from "./actionTypes";

export const onIncrement = counter => ({
  type: actionTypes.INCREMENT,
  counter
});

export const onDelete = counterId => ({
  type: actionTypes.DELETE,
  counterId
});

export const onResetCounter = () => ({
  type: actionTypes.RESET
});
