import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FileSelect from "../components/FileSelect";

describe("FileSelect component", () => {
  const list = ["file1", "file2", "file3"];
  const setSelectedFile = jest.fn();

  //Valida que el componente se renderice correctamente.
  it("renders correctly", () => {
    const { container } = render(
      <FileSelect
        list={list}
        selectedFile={""}
        setSelectedFile={setSelectedFile}
      />
    );
    expect(container).toMatchSnapshot();
  });

  //Valida que la funcion setSelectedFile llame de manera correcta en este caso al archivo file1.
  it("selects file", () => {
    const { getByRole } = render(
      <FileSelect
        list={list}
        selectedFile={""}
        setSelectedFile={setSelectedFile}
      />
    );
    const select = getByRole("combobox");
    expect(select).toBeInTheDocument();
    fireEvent.change(select, { target: { value: "file1" } });
    expect(setSelectedFile).toHaveBeenCalledWith("file1");
  });
});
