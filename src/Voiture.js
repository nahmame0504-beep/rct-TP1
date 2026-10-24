import PropTypes from 'prop-types';

function Voiture({ marque, modele, couleur = 'Non spécifiée' }) {
  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '8px', margin: '5px 0', borderRadius: '4px' }}>
      <p>Voiture : {marque} {modele} (Couleur : {couleur})</p>
    </div>
  );
}

Voiture.propTypes = {
  marque: PropTypes.string.isRequired,
  modele: PropTypes.string.isRequired,
  couleur: PropTypes.string,
};

export default Voiture;