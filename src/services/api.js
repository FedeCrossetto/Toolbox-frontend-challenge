const ROUTE_API_PATH = "http://localhost:3000";

export const getListService = async () => {
  try {
    const response = await fetch(`${ROUTE_API_PATH}/files/list`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error getting list of files: ${error.message}`);
  }
}

export const getFileService = async (selectedFile) => {
  const regex = /\d+/;
  try {
    const response = await fetch(
      `${ROUTE_API_PATH}/files/data?fileName=${selectedFile.match(regex)}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(
      `Error getting file info ${selectedFile}: ${error.message}`
    );
  }
}
