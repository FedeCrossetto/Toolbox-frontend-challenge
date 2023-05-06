import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getList, getFileData } from '../services/api';
import FileSelect from './FileSelect';
import MyAlert from './MyAlert';

const tableStyle = {
  width: '90%',
  margin: 'auto',
  textAlign: 'center',
  marginTop: 24
};

export const DataTable = () => {
  const [list, setList] = useState([]);
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setShowAlert(false);
    getList()
      .then((res) => setList(res.files))
      .catch((err) => {
        console.error(err);
        setShowAlert(true);
      });
  }, []);

  useEffect(() => {
    if (selectedFile) {
      setShowAlert(false);
      setFiles([]);
      getFileData(selectedFile)
        .then((res) => setFiles(res))
        .catch((err) => {
          console.error(err);
          setShowAlert(true);
        });
    }
  }, [selectedFile]);

  return (<>
    {<FileSelect
      selectedFile={selectedFile}
      list={list}
      setSelectedFile={setSelectedFile}
    />}
    <Table striped bordered hover size="sm" style={tableStyle}>
      <thead>
        <tr style={{ textAlign: 'left' }}>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {(files.length > 0) ?
          files.slice(1).map((x, index) =>
            <tr style={{ textAlign: 'left' }}
              key={index}>
              <td>{x.file}</td>
              <td>{x.text}</td>
              <td>{x.number}</td>
              <td>{x.hex}</td>
            </tr>
          ) :
          <tr >
            <td colSpan="4">Table empty</td>
          </tr>
        }
      </tbody>
    </Table>
    <MyAlert showAlert={showAlert} setShowAlert={setShowAlert} />
  </>
  );
}
