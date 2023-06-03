
import './App.css';
import {
  BrowserRouter, Routes, Route, Redirect
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  const dispatch = useDispatch();
  const appReducerState = useSelector(state => state);
  // console.log(appReducerState);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
