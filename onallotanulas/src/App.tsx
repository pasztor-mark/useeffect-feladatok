
import './App.css'
import Header from './components/Header'
import Elonyok from './components/Elonyok'
import Modok from './components/Modok'
import Tippek from './components/Tippek'
import Fontos from './components/Fontos'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header/>
    <main className='container my-5'>
      <Elonyok/>
      <Modok/>
      <Tippek/>
      <Fontos/>
    </main>
    <Footer/>
    </>
  )
}

export default App
