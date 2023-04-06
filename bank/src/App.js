import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './frontend/components/landing-page'
import Operations from './frontend/components/operations-page'
import BreakDown from './frontend/components/breakdown-page'

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/breakdown" element={<BreakDown />} />
      </Routes>
    </Router>
  );
}

export default App;
