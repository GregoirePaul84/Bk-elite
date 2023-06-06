import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Main/Home';
import Legal from './Components/Legal';
import Cgv from './Components/Cgv';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Bk-elite/' element={<Home />}></Route>
        <Route path='/Bk-elite/mentions-legales' element={<Legal />}></Route>
        <Route path='/Bk-elite/cgv' element={<Cgv />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
