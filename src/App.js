import './App.css';
import NoRoutes from './URLpath/noRoute';
import LineChart from './component/rand';
import Home from './URLpath/home';
import { registerCharts } from './chartJS/chart';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
registerCharts();

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/waves-' element={<LineChart/>}/>
        <Route path='*' element={<NoRoutes/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
