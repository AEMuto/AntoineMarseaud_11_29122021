import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class LodgingCard extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="card card--lodging">
        <img src={data.cover} alt=""/>
        <h3 className="card__title">{data.title}</h3>
        <Link to={`/lodging/${data.id}`}/>
      </div>
    )
  }
}

LodgingCard.propTypes = {
  data: PropTypes.object
}

export default LodgingCard;