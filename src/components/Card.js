import React from 'react';
import Content from './Content'

const row = {
  display: 'flex',
}

const columnLeft = {
  width: '25%'
}

const columnRight = {
  width: '75%'
}

const Card = (props) => (
  <div style={row}>
    <div style={columnLeft}>
      Date
    </div>
    <div style={columnRight}>
      <Content />
    </div>
    <p onClick={props.handleSubmit}>Click Me</p>
  </div>
);

export default Card;

// We want to create a two column layout using flex.
// It's worth noting that IE 10 doesn't support flex.
