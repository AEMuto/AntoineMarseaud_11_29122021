import Loader from '../components/Loader';
import Error from '../components/Error';
import Gallery from '../components/Gallery';
import Lodging from '../components/Lodging';
import { Link } from 'react-router-dom';

const conditionalRender = (isLoading, error, response, lodgings, id) => {
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
    const lodgingData = lodgings.find(lodging => lodging.id === id);
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

export default conditionalRender;