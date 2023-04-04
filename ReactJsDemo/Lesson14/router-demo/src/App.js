
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Menu from './components/Menu';
import Home from './components/Home';
import Categories from './components/Categories';
import About from './components/About';
import Program from './components/Program';
import Network from './components/Network';
import Kid from './components/Kid';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/categories' element={<Categories />}>
            <Route path='program' element={<Program />}></Route>
            <Route path='network' element={<Network/>}></Route>
            <Route path='kid' element={<Kid/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
