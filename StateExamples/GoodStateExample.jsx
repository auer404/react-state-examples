import './StateExamples.css';

// Changeons d'approche : plus de variable globale ; counter sera un état du composant GoodStateExample. React nous fournit un outil pour gérer ça correctement : useState
import { useState } from 'react';

function GoodStateExample() {

  // Pour déclarer un état :
  const counterPACK = useState(0); // 0 = la valeur initiale de notre état
  // counterPACK est un tableau contenant deux éléments :
  const counter = counterPACK[0]; // un ACCÈS à l'état (lecture)
  const setCounter = counterPACK[1]; // une FONCTION pour le mettre à jour (écriture)

  /* Point syntaxe ---
  À la place des 2 lignes précédentes on pourrait écrire :

  const [counter , setCounter] = counterPACK; ("déconstruction" de tableau)

  D'où la syntaxe la plus courante :

  const [counter , setCounter] = useState(0);

  */

  // La règle à suivre maintenant : on ne tentera jamais de modifier directement counter ; on utilisera toujours setCounter(nouvelleValeur)

  // > De cette manière, React "surveille" (ou contrôle) correctement counter et gèrera automatiquement le rafraichissement de tous les éléments HTML concernés au sein du composant.

  // La fonction updateCounter() utilisée pour <BadStateExample/> devient alors :
  function updateCounter() {
    setCounter(counter + 1);
  }
  // On note qu'elle est maintenant, elle aussi, déclarée à l'intérieur de la déclaration de la fonction composant. Symboliquement elle lui "appartient" également, et techniquement c'est une obligation pour pouvoir accéder à counter et setCounter.

  // Rendu : identique à <BadStateExample/>

  return (
  <div className="state-example good">
    <button onClick={updateCounter}>
      {counter}
    </button> Compteur fonctionnel et React-friendly !
  </div>

  )
 
}

export default GoodStateExample;
