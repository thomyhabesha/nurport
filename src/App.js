import {HashRouter, Routes,Route} from 'react-router-dom'
import Home from './page/Home'
import Acomplishments from './page/Acomplishments'
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter >
      <Routes>
        <Route  exact path="/" element={<Home/>}/>
        <Route  path="/accomplish" element={<Acomplishments/>}/>
        
      </Routes>
      </HashRouter>
     

    </div>
  );
}

export default App;
