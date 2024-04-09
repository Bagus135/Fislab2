import './App.css';
import NoRoutes from './URLpath/noRoute';
import Home from './URLpath/home';
import Tabel from './chartJS/table';
import LineChart from './chartJS/chart';
import { Route, Routes, BrowserRouter} from 'react-router-dom';

function ABC(){
  return (
    <Tabel Header={['A','B','C']}  Data={[[1,2,3],[1,2,3],[2,3,4],[3,4,5],[2,3,7]]}/>
  )
};

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/waves-5' element={<LineChart/>}/>
        <Route path='/waves-4' element={<ABC/>}/>
        <Route path='*' element={<NoRoutes/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
