import React from 'react';
import PropTypes from 'prop-types';

const Content = (props) => (
  <div>
    <div>{props.title}</div>
    <div>{props.content}</div>
  </div>
);

Content.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Content;
