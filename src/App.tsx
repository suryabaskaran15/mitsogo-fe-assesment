import { BrowserRouter } from 'react-router-dom';
import Routing from './router/router';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </>
  );
}

export default App
