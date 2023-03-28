import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Main/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Bk-elite/' element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
