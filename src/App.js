import './App.css';
import NoRoutes from './URLpath/noRoute';
import Home from './URLpath/home';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import W5 from './fislab/W5/renderW5';
import { MathJaxContext } from 'better-react-mathjax';


function App() {
  return (
    <MathJaxContext>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/waves-5' element={<W5/>}/>
        <Route path='*' element={<NoRoutes/>}/>
      </Routes>
      </BrowserRouter>
    </MathJaxContext>
  );
}

export default App;
