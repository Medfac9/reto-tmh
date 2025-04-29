import { render, screen } from "@testing-library/react";
import { UserProfile } from "@/components/UserProfile";

describe("UserProfile", () => {
  it("muestra los datos del usuario correctamente", () => {
    const user = {
      name: "Juan Pérez",
      email: "juan@correo.com",
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    };

    render(<UserProfile {...user} />);

    expect(screen.getByText("Juan Pérez")).toBeInTheDocument();
    expect(screen.getByText("juan@correo.com")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", user.imageUrl);
  });
});
