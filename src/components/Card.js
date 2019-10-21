import React from 'react';
import PropTypes from 'prop-types';
import Content from './Content'
import formatDate from '../lib/formatDate';
import formatTitle from '../lib/formatTitle';
import formatContent from '../lib/formatContent';

const row = {
  display: 'flex',
  paddingBottom: '160px',
  paddingTop: '30px',
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
      {formatDate(props.date)}
    </div>
    <div style={columnRight}>
      <Content
        title={formatTitle(props.title)}
        content={formatContent(props.content)}
      />
    </div>
  </div>
);

Card.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default Card;

// We want to create a two column layout using flex.
// It's worth noting that IE 10 doesn't support flex.
