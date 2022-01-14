import React from 'react';
import PropTypes from 'prop-types';

class Error extends React.Component {
  render() {
    const { response } = this.props;
    return (
      <section className="error">
        <h3>Oups, il y a eu une erreur...</h3>
        <br/>
        <p>Le serveur a répondu avec le status : {response.status}</p>
      </section>
    )
  }
}

export default Error;

Error.propTypes = {
  response: PropTypes.object
}