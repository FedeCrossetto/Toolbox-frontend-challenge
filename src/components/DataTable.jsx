import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getListService, getFileService } from '../services/api';
import FileSelect from './FileSelect';
import MyAlert from './MyAlert';

const tableStyle = {
  width: '90%',
  margin: 'auto',
  textAlign: 'center',
  marginTop: 24,
};

const DataTable = () => {
  const [list, setList] = useState([]);
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    setShowAlert(false);
    getListService()
      .then((res) => setList(res.files))
      .catch((err) => {
        if (err) {
          setErrorMsg('Error fetching file list');
          setShowAlert(true);
        }
      });
  }, []);

  useEffect(() => {
    if (selectedFile) {
      setShowAlert(false);
      setFiles([]);
      getFileService(selectedFile)
        .then((res) => setFiles(res))
        .catch((err) => {
          console.error(err);
          setErrorMsg(`Error fetching file ${selectedFile}`);
          setShowAlert(true);
        });
    }
  }, [selectedFile]);

  return (
    <>
      <FileSelect
        selectedFile={selectedFile}
        list={list}
        setSelectedFile={setSelectedFile}
      />
      <Table data-testid="data-table" striped bordered hover size="sm" style={tableStyle}>
        <thead>
          <tr data-testid="data-table-header-row">
            <th data-testid="column-File Name">File Name</th>
            <th data-testid="column-Text">Text</th>
            <th data-testid="column-Number">Number</th>
            <th data-testid="column-Hex">Hex</th>
          </tr>
        </thead>
        <tbody>
          {files[0] ? (
            files.map((x, index) => {
              if (index === 0) return null; // omitir el primer elemento
              return (
                <tr style={{ textAlign: 'left' }} key={index}>
                  <td>{x.file}</td>
                  <td>{x.text}</td>
                  <td>{x.number}</td>
                  <td>{x.hex}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="4">Table empty</td>
            </tr>
          )}
        </tbody>
      </Table>
      {/* <MyAlert errorMsg={errorMsg} onClose={() => setShowAlert(false)} /> */}
      <MyAlert showAlert={showAlert} setShowAlert={setShowAlert} errorMsg={errorMsg} onClose={() => setShowAlert(false)} />
    </>
  );
};
export default DataTable;