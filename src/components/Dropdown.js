import React, { Fragment } from 'react';

class Dropdown extends React.Component {

  renderData = (data) => {
    if (Array.isArray(data)) {
      return <ul>{data.map((equipment, index) => <li key={index}>{equipment}</li>)}</ul>;
    } else {
      return <p>{data}</p>;
    }
  }

  render() {
    return (
      <Fragment>
        <h3>{this.props.title}</h3>
        {this.renderData(this.props.data)}
      </Fragment>
    )
  }
}

export default Dropdown;