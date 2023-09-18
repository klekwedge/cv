import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import NavBar from '../NavBar/NavBar';
import Resume from '../Resume/Resume';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';

function App() {
  return (
    <Router>
      <main>
        <Sidebar />
        <div className="main-content">
          <NavBar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
