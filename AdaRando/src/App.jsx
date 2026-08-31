import { Entete } from './components/Entete.jsx'
import randonnees from './randonnees.json';
import { CarteRando } from './components/CarteRando.jsx';
import { ListeRandos } from './components/ListeRandos.jsx';



function App() {
  return (
    <div>
        <Entete nombreRandonnees={randonnees.length}/>
        <ListeRandos randonnees={randonnees}/>
      
    </div>
  )
}

export default App