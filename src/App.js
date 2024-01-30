import './App.css'
// manca il file css di Bootstrap! importiamolo qua in App.js
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar'

// questo è un import più selettivo, che nella fase di finalizzazione del progetto
// risulterà in una cartella meno pesante (peserà meno MB)

// import { Button } from 'react-bootstrap'
// questo import non è il massimo, perchè anche solo per importare il Button trascina dentro il componente
// l'intera libreria react-bootstrap

function App() {
  return (
    <>
      <header>
        <CustomNavbar />
      </header>
      <main></main>
    </>
  )
}

export default App
