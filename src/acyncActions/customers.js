import {AllCustomerAction} from "../store/customerReduser";


export const fetchCustomers = () => (
   function (dispatch) {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(json => dispatch(AllCustomerAction(json)))
   }
)