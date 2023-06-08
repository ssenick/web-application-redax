const defaultState = {
   customers: []
}


const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";
const ADD_ALL_CUSTOMER = "ADD_ALL_CUSTOMER";

export const customerReducer = (state = defaultState, action) => {
   switch (action.type) {
      case ADD_ALL_CUSTOMER:
         return {...state,customers: [...state.customers,...action.payload]}
      case ADD_CUSTOMER:
         return {...state, customers: [...state.customers, action.payload]}
      case REMOVE_CUSTOMER:
         return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
      default:
         return state;
   }
}


export const AllCustomerAction = (payload) => (
   {type: ADD_ALL_CUSTOMER, payload}
)
export const addCustomerAction = (payload) => (
   {type: ADD_CUSTOMER, payload}
)
export const removeCustomerAction = (payload) => (
   {type: REMOVE_CUSTOMER, payload}
)