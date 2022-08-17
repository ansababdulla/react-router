import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Expenses from '../src/routes/expenses';
import Invoice from '../src/routes/invoice';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="expenses" element={<Expenses/>}/>
            <Route path="invoice" element={<Invoice/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
