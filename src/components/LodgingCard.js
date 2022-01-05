import React from 'react';
import { Link } from 'react-router-dom';

class LodgingCard extends React.Component {
  render() {
    return (
      <div className="card card--lodging">
        <img src={this.props.data.cover} alt=""/>
        <h3 className="card__title">{this.props.data.title}</h3>
        <Link to={{
          pathname: `/lodging/${this.props.data.id}`,
          state: this.props.data
        }}/>
      </div>
    )
  }
}

export default LodgingCard;