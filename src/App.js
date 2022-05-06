import { Route, Routes } from 'react-router-dom';
import './App.css';
import ListFruits from './routes/ListFruits';
import Layout from './components/Layout/Layout'
import Payment from './routes/Payment';


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<ListFruits />} />
        <Route path='payment' element={<Payment />} />
      </Route>
    </Routes>
  );
}

export default App;
