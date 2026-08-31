import "./Entete.css"

export const Entete = (props) => {
  return (
    <div className="entete">
      <h1>AdaRando</h1>
      <p>Trouve ta prochaine randonnée</p>
      <article> 
        {props.nombreRandonnees} Randonnées Trouvées
      </article>
    </div>
  )
}

