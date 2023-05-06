import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyAlert from "../components/MyAlert";

describe("MyAlert component", () => {
  //Valida que el componente MyAlert se renderice correctamente.
  it("renders correctly", () => {
    const { container } = render(
      <MyAlert errorMsg="Error message" onClose={() => {}} />
    );
    expect(container).toMatchSnapshot();
  });

  //Valida que cuando se llame a la función onClose se cierre correctamente, valida el estilo, y que se muestre el error.
  it("displays error message", () => {
    const onClose = jest.fn();
    const { getByText, getByRole } = render(
      <MyAlert errorMsg="Error message" onClose={onClose} />
    );

    const closeButton = getByRole("button");
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
    expect(getByText("Error message")).toBeInTheDocument();
    expect(getByRole("alert")).toHaveClass("alert-danger");
  });

  //Valida que si el mensaje de error es nulo,el mensaje no se muestre.
  it("does not display error message", () => {
    const { queryByText } = render(
      <MyAlert errorMsg={null} onClose={() => {}} />
    );
    expect(queryByText("Error message")).toBeNull();
  });
});
