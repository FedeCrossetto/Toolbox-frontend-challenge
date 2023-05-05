import React from 'react';
import Form from 'react-bootstrap/Form';

const FileSelect = ({ list, selectedFile, setSelectedFile }) => {
  return (
    <Form.Select
      style={{ width: '90%', margin: 'auto' }}
      value={selectedFile}
      onChange={(e) => setSelectedFile(e.target.value)}
    >
      <option value="" hidden>
        Select a file
      </option>
      {list.map((file, index) => (
        <option key={index}>{file}</option>
      ))}
    </Form.Select>
  );
};

export default FileSelect;