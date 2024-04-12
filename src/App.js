import NoRoutes from './URLpath/noRoute';
import Home from './URLpath/home';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import W5 from './fislab/W5/renderW5';
import MP1 from './fislab/MP1/renderMP1';
import MP2 from './fislab/MP2/renderMP2';
import W1 from './fislab/W1/renderW1';
import { MathJaxContext } from 'better-react-mathjax';


function App() {
  return (
    <MathJaxContext>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/waves-1' element={<W1/>}/>
        <Route path='/waves-5' element={<W5/>}/>
        <Route path='/modern-physics-1' element={<MP1/>}/>
        <Route path='/modern-physics-2' element={<MP2/>}/>
        <Route path='*' element={<NoRoutes/>}/>
      </Routes>
      </BrowserRouter>
    </MathJaxContext>
  );
}

export default App;
