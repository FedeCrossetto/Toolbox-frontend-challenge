import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

export const TableInfo = () => {

  const [list, SetList] = useState([]);
  const [files, SetFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState('');

  //Para obtener la lista de archivos 
  useEffect(() => {
    const getTest = () => {
      fetch('http://localhost:3000/files/list')
        .then(res => res.json())
        .then(res => SetList(res.files))
    }
    getTest()
  }, [])

  //Para obtener el archivo seleccionado de la lista.
  useEffect(() => {
    if (selectedFile) {
      SetFiles([])
      const regex = /\d+/;
      const getTest = () => {
        fetch(`http://localhost:3000/files/data?fileName=${selectedFile.match(regex)}`)
          .then(res => res.json())
          .then(res => SetFiles(res))
      }
      getTest()
      console.log('files', files)
    }
  }, [selectedFile])

  return (<>
    <Form.Select
      style={{ width: '90%', margin: 'auto' }}
      value={selectedFile}
      onChange={(e) => setSelectedFile(e.target.value)}
    >
      <option value="" hidden>
        Selecciona un archivo
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
        {(files.length != 0) ?
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
