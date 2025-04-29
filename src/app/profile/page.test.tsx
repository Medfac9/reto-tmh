import { render, screen, waitFor } from "@testing-library/react";
import ProfilePage from "@/app/page";

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    pathname: "/profile",
  }),
}));

jest.mock("@/app/profile/page", () => ({
  getUserData: jest.fn().mockResolvedValue({
    name: "Juan Pérez",
    email: "juan@correo.com",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  }),
}));

describe("ProfilePage", () => {
  it("muestra los datos del usuario al cargar", async () => {
    render(<ProfilePage />);

    // Esperamos que los datos del usuario sean renderizados
    await waitFor(() => screen.getByText("Juan Pérez"));

    expect(screen.getByText("Juan Pérez")).toBeInTheDocument();
    expect(screen.getByText("juan@correo.com")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://randomuser.me/api/portraits/men/1.jpg"
    );
  });
});
