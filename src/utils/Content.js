import PropTypes from 'prop-types';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Gallery from '../components/Gallery';
import Lodging from '../components/Lodging';
import { Link } from 'react-router-dom';

/**
 * Content permet le rendu conditionnel des éléments suivants :
 * Loader, Error, Gallery (les cartes des différents logements pour la page Home),
 * Lodging (le contenu d'une page logement spécifiée par son id), et un message
 * d'erreur si l'id du logement n'existe pas.
 * @param isLoading
 * @param error
 * @param response
 * @param lodgings
 * @param id
 * @returns {JSX.Element}
 * @constructor
 */
const Content = ({ isLoading, error, response, lodgings, id }) => {
  if (isLoading) {
    return <Loader/>
  }
  if (error) {
    return <Error response={response}/>
  }
  if (lodgings && !id) {
    return <Gallery lodgings={lodgings}/>
  }
  if (lodgings && id) {
    // C'est grâce à la méthode d'array find que l'on sait si le logement existe
    const lodgingData = lodgings.find(lodging => lodging.id === id);
    // S'il n'est pas trouvé on fait le rendu d'un message d'erreur approprié
    if (!lodgingData) {
      return (
        <div className="notFound">
          <h1>404</h1>
          <h2>Oups! Ce logement n'existe pas.</h2>
          <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
      )
    }
    return <Lodging lodgingData={lodgingData} />
  }
}

Content.propTypes = {
  lodgings: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  isLoading: PropTypes.bool,
  response: PropTypes.object,
  error: PropTypes.bool
}

export default Content;