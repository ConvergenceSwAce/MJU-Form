import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Survey from './pages/Survey';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/survey" element={<Survey />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
