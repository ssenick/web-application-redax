const defaultState = {
   count: 0
};
export const INCREMENT = 'INCREMENT';
export const ASYNC_INCREMENT = 'DECREMENT';

export const DECREMENT = 'DECREMENT';


export const countReducer = (state = defaultState, action) => {
   switch (action.type) {
      case "INCREMENT":
         return {...state, count: state.count - 1}
      case "DECREMENT":
         return {...state, count: state.count + 1}
      default:
         return state;
   }
}

export const countIncrementAction = (payload) => (
   {type: INCREMENT, payload}
)
export const countDecrementAction = (payload) => (
   {type: DECREMENT, payload}
)
export const AsyncCountIncrementAction = (payload) => (
   {type: ASYNC_INCREMENT, payload}
)