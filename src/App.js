import {Route, Routes} from 'react-router-dom';
import './App.css';
import Circles from './components/Circles';
import Cards from './components/Cards';
import Nav from './components/Nav';
import CardDetails from './components/CardDetails';

function App() {
  return (
    <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Circles />} />
          <Route path='/cards' element={<Cards/>} />
          <Route path='/cards/:id' element={<CardDetails />} />
          <Route path='/page4' element={<h1>page4</h1>} />
          <Route path='*' element={<div class="hit-the-floor">404<br/>Not Found</div>} />
        </Routes>
    </div>
  );
}

export default App;
