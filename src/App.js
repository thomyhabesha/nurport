import logo from './logo.svg';
import { createHashRouter,RouterProvider} from 'react-router-dom'
import Home from './page/Home'
import ReactDom from 'react-dom/client'

import './App.css';

const router = createHashRouter(
  [
    {
      path:"/*",
      element:<Home/>,
    }
  ]);

function App() {
  return (
    <div className="App">
      
      <RouterProvider router={router} />
      
     

    </div>
  );
}

export default App;
