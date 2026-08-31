import { CarteRando } from "./CarteRando"
import "./ListeRandos.css"

export const ListeRandos = (props) => {
    return (
        <div className="liste-randos">
             {props.randonnees.map((rando) => (
  <CarteRando randonnee={rando} key={rando.nom} />
))}  

        </div>
    )
}