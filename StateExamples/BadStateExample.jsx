import './StateExamples.css';

// On veut gérer un compteur, qui augmentera à chaque clic sur un bouton. Approche "traditionnelle" : le compteur est une variable globale.
let counter = 0;

function updateCounter(e) {

  counter++;

  // Si on n'utilise pas un état (state) pour gérer notre compteur, on perd tout l'intérêt de React : rafraichissement automatique des composants dès qu'ils doivent afficher ou dépendre d'une variable.

  // On doit donc, nous-mêmes, gérer des modifications du DOM (ce dont React est justement censé nous dispenser) :
  e.target.textContent = counter;

}

function BadStateExample() {

  return (
  <div className="state-example bad">
    <button onClick={updateCounter}>
      {counter}
    </button> Compteur fonctionnel mais pas React-friendly...
  </div>

  )
 
}

export default BadStateExample;
