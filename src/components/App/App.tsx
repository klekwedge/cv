import Sidebar from '../Sidebar/Sidebar';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';

function App() {
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <NavBar />
        <About />
        <Portfolio />
      </div>
    </main>
  );
}

export default App;
