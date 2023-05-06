import React from "react";
import { render, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DataTable from "../components/DataTable";

describe("DataTable component", () => {
  //Valida que se muestre la tabla sin errores.
  it("should render without errors", async () => {
    await act(async () => {
      const { queryByTestId } = render(<DataTable />);
      expect(queryByTestId("data-table")).toBeDefined();
    });
  });

  //Valida que la tabla renderice correctamente los nombres del header y las columnas.
  it("renders column names", async () => {
    const columns = ["File Name", "Text", "Number", "Hex"];
    const { getByTestId } = render(<DataTable />);
    await waitFor(() => {
      expect(getByTestId("data-table-header-row")).toBeInTheDocument();
    });
    act(() => {
      columns.forEach((column) => {
        const columnHeader = getByTestId(`column-${column}`);
        expect(columnHeader).toBeInTheDocument();
        expect(columnHeader.textContent).toBe(column);
      });
    });
  });
});
