import actionTypes from "./actionTypes";

const initialState = {
  counters: [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
  ]
};

function incrementCounter(counters, counter) {
  const localCounters = [...counters];
  const index = localCounters.findIndex(lc => lc.id === counter.id);
  localCounters[index] = { ...counter };
  localCounters[index].value += 1;
  return localCounters;
}

function deleteCounter(counters, counterId) {
  return counters.filter(c => c.id !== counterId);
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counters: incrementCounter(state.counters, action.counter)
      };
    case actionTypes.DELETE:
      return {
        ...state,
        counters: deleteCounter(state.counters, action.counterId)
      };
    case actionTypes.RESET:
      return {
        ...state,
        counters: initialState.counters
      };
    default:
      return state;
  }
};

export default counterReducer;
