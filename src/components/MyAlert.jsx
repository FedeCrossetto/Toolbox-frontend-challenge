import React from 'react';
import Alert from 'react-bootstrap/Alert';

const alertStyle = {
  width: '90%',
  margin: 'auto',
  marginTop: 24,
  opacity: '80%',
};

const MyAlert = ({ errorMsg, onClose, showAlert, setShowAlert }) => {
  return (
    errorMsg && (
      <Alert variant="danger" style={alertStyle} onClose={onClose} dismissible show={showAlert}>
        <p>{errorMsg}</p>
      </Alert>
    )
  );
};
export default MyAlert;