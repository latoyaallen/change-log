import React from 'react';
import PropTypes from 'prop-types';

const notificationDot = {
  height: '25px',
  width: '25px',
  backgroundColor: 'red',
  borderRadius: '50%',
  display: 'inline-block',
  right: '50px',
  position: 'absolute',
  zIndex: 100,
}

const UnreadNotifications = (props) => (
  <div>
    <div style={notificationDot} onClick={props.handleSubmit}></div>
  </div>
);

UnreadNotifications.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default UnreadNotifications;
