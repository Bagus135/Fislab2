import './App.css';
import NoRoutes from './URLpath/noRoute';
import Home from './URLpath/home';
import Udara1 from './component/rand';
import { Plotly } from './chartJS/table';
import { Route, Routes, BrowserRouter} from 'react-router-dom';


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/waves-5' element={<Udara1/>}/>
        <Route path='/waves-1' element={<Plotly/>}/>
        <Route path='*' element={<NoRoutes/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
