import React from 'react';
import Alert from 'react-bootstrap/Alert';

const MyAlert = ({ showAlert, setShowAlert }) => {
  return (
    showAlert && (
      <Alert
        variant="danger"
        style={{ width: '90%', margin: 'auto', marginTop: 24, opacity: '80%' }}
        onClose={() => setShowAlert(false)}
        dismissible
      >
        <p>The selected file does not contain information.</p>
      </Alert>
    )
  );
};

export default MyAlert;
