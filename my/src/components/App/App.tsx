import Greetings from '../Greetings/Greetings'
import Header from '../Header/Header'
import './App.css'

function App() {

  return (
    <div className="wrapper">
      <Header/>
      <main className="main">
        <Greetings/>
        <div className="main__container _container">

        </div>
      </main>
    </div>
  )
}

export default App
