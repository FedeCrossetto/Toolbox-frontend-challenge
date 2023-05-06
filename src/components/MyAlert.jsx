import React from 'react';
import Alert from 'react-bootstrap/Alert';

const alertStyle = {
  width: '90%',
  margin: 'auto',
  marginTop: 24,
  opacity : '80%'
};

const MyAlert = ({ showAlert, setShowAlert }) => {
  return (
    showAlert && (
      <Alert
        variant="danger"
        style={alertStyle}
        onClose={() => setShowAlert(false)}
        dismissible
      >
        <p>The selected file does not contain information.</p>
      </Alert>
    )
  );
};

export default MyAlert;
