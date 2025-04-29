import { render, screen, fireEvent, within } from "@testing-library/react";
import TodoList from "@/components/TodoList";

describe("TodoList", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("añade una tarea correctamente", () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText(/Escribe una tarea.../i), {
      target: { value: "Tarea 1" },
    });
    fireEvent.click(screen.getByText(/añadir/i));
    expect(screen.getByText("Tarea 1")).toBeInTheDocument();
  });

  it("elimina una tarea", () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText(/Escribe una tarea.../i), {
      target: { value: "Eliminarme" },
    });
    fireEvent.click(screen.getByText(/añadir/i));
    const item = screen.getByText("Eliminarme").closest("li");
    const deleteButton = within(item!).getByText(/eliminar/i);
    fireEvent.click(deleteButton);
    expect(screen.queryByText("Eliminarme")).not.toBeInTheDocument();
  });
});
