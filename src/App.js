import logo from './logo.svg';
import {HashRouter, Routes,Route} from 'react-router-dom'
import Home from './page/Home'
import Payment from './page/Payment'
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter >
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/Payment" element={<Payment/>}/>
        
      </Routes>
      </HashRouter>
     

    </div>
  );
}

export default App;
