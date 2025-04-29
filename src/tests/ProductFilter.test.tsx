import { render, screen, fireEvent } from "@testing-library/react";
import { ProductFilter } from "@/components/ProductFilter";

describe("ProductFilter", () => {
  it("debería actualizar el filtro al escribir en el campo", () => {
    const mockOnFilterChange = jest.fn();
    render(<ProductFilter filter="" onFilterChange={mockOnFilterChange} />);

    const input = screen.getByPlaceholderText("Escribe para filtrar...");
    fireEvent.change(input, { target: { value: "Portatil" } });

    expect(mockOnFilterChange).toHaveBeenCalledWith("Portatil");
  });
});
