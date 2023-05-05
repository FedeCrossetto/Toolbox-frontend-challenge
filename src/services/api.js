

const ROUTE_API_PATH = 'http://localhost:3000';



export const getList = () => {
    return fetch(`${ROUTE_API_PATH}/files/list`)
      .then(res => res.json());
  }

  export const getFileData = (selectedFile) => {
    const regex = /\d+/;
    return fetch(`${ROUTE_API_PATH}/files/data?fileName=${selectedFile.match(regex)}`)
      .then(res => res.json());
  }
