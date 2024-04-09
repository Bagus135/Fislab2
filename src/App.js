import './App.css';
import NoRoutes from './URLpath/noRoute';
import Home from './URLpath/home';
import LineChart from './chartJS/chart';
import { Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/waves-5' element={<LineChart/>}/>
        <Route path='*' element={<NoRoutes/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
