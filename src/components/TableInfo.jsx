import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { getList, getFileData } from '../services/api'
import Form from 'react-bootstrap/Form'

export const TableInfo = () => {

  const [list, setList] = useState([]);
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState('');

  //Para obtener la lista de archivos 
  useEffect(() => {
    getList()
      .then(res => setList(res.files))
      .catch(err => console.error(err));
  }, []);

  //Para obtener el archivo seleccionado de la lista.
  useEffect(() => {
    if (selectedFile) {
      setFiles([]);
      getFileData(selectedFile)
        .then(res => setFiles(res))
        .catch(err => console.error(err));
    }
  }, [selectedFile]);

  return (<>
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
    <Table striped bordered hover size="sm" style={{ width: '90%', margin: 'auto', textAlign: 'center', marginTop: 24 }}>
      <thead>
        <tr style={{ textAlign: 'left' }}>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {(files.length) ?
          files.slice(1).map((x, index) =>
          (
            <tr style={{ textAlign: 'left' }}
              key={index}>
              <td>{x.file}</td>
              <td>{x.text}</td>
              <td>{x.number}</td>
              <td>{x.hex}</td>
            </tr>
          )
          ) :
          <tr >
            <td colSpan="4">Table empty</td>
          </tr>
        }
      </tbody>
    </Table>
  </>

  );
}
