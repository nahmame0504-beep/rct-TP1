import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';
import BoutonAlerte from './BoutonAlerte';

function App() {
  const mesCourses = ['Pommes', 'Lait', 'Pain', 'Café'];

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Mon Premier TP React</h1>
      <p>Bienvenue dans notre application de formation.</p>
      <hr />

      <h2>Composant Simple</h2>
      <HelloWorld />
      <hr />

      <h2>Salutations (Props)</h2>
      <Greeting prenom="Alice" />
      <Greeting prenom="Bob" />
      <Greeting prenom="Charlie" />
      <hr />

      <h2>Profils Utilisateurs (PropTypes)</h2>
      <Profil nom="Alice Martin" age={28} estActif={true} />
      <Profil nom="Bob Dupont" age={35} estActif={false} />
      <hr />

      <h2>Véhicules (DefaultProps)</h2>
      <Voiture marque="Peugeot" modele="208" couleur="Bleue" />
      <Voiture marque="Renault" modele="Clio" />
      <hr />

      <h2>Liste dynamique (Map & Keys)</h2>
      <ListeCourses items={mesCourses} />
      <hr />

      <h2>Interactions (Événements)</h2>
      <BoutonAlerte message="Action effectuée avec succès !" />
    </div>
  );
}

export default App;