import About from '../About/About'
import Greetings from '../Greetings/Greetings'
import Header from '../Header/Header'
import Skills from '../Skills/Skills'
import Strengths from '../Strengths/Strengths'
import './App.css'

function App() {

  return (
    <div className="wrapper">
      <Header/>
      <main className="main">
        <Greetings/>
        <div className="main__container _container">
          <About/>
          <Skills/>
          <Strengths/>
        </div>
      </main>
    </div>
  )
}

export default App
