import { EtiquetteDifficulte } from "./EtiquetteDifficulte"
import "./CarteRando.css"

export const CarteRando = (props) => {
    return (
    <div className="carte-rando">
        <p> {props.randonnee.nom} </p>
        <EtiquetteDifficulte difficulte={props.randonnee.difficulte} />
        <p> {props.randonnee.duree_h} </p>
        <p> {props.randonnee.denivele_m} </p>
        {props.randonnee.balisee && <p> Balisée </p>}
    </div>
    )
}