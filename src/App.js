import logo from './logo.svg';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './page/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          
        </Route>
      </Routes>
      </BrowserRouter>
     <Home/>

    </div>
  );
}

export default App;
