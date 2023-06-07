import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReduser";


function App() {
   const dispatch = useDispatch();
   const cash = useSelector(state => state.cash.cash);
   const customers = useSelector(state => state.customers.customers)
   const addCash = (cash) => {
      dispatch({type: 'ADD_CASH', payload: cash})
   }
   const getCash = (cash) => {
      dispatch({type: 'GET_CASH', payload: cash})
   }

   const addCustomer = (name) => {
      const customer = {
         name,
         id: Date.now(),
      }
      dispatch(addCustomerAction(customer))
   }

   const removeCustomer = (customer) => {

      dispatch(removeCustomerAction(customer.id))
   }

   return (
      <div className="App">
         <h1>{cash}</h1>
         <div style={{display: 'flex', gap: '20px'}}>
            <button onClick={() => addCash(Number(prompt()))}>ADD CASH</button>
            <button onClick={() => getCash(Number(prompt()))}>GET CASH</button>
            <button onClick={() => addCustomer(prompt())}>ADD CUSTOMER </button>

         </div>
         {customers.length > 0
            ?
            <div style={{display:'grid', gap: '20px'}}>
               {customers.map(customer =>
                  <div onClick={()=> removeCustomer(customer)} key={customer.id} style={{border:'1px solid #000', padding:'10px'}}>{customer.name}</div>
               )}
            </div>
            :
            <h2 style={{textAlign: 'center'}}>Not fined customers :(( </h2>
         }
      </div>
   );
}

export default App;
