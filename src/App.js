import './App.css';
import {useDispatch, useSelector} from "react-redux";


function App() {
   const dispatch = useDispatch();
   const cash = useSelector(state => state.cash.cash);

   const addCash = (cash) => {
      dispatch({type:'ADD_CASH',payload:cash})
   }
   const getCash = (cash) => {
      dispatch({type:'GET_CASH',payload:cash})
   }

   return (
      <div className="App">
         <h1>{cash}</h1>
         <div style={{display: 'flex', gap: '20px'}}>
            <button onClick={() => addCash(Number(prompt()))}>ADD CASH</button>
            <button onClick={() => getCash(Number(prompt()))}>GET CASH</button>
         </div>
      </div>
   );
}

export default App;
