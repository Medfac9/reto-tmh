import React from "react";
import { UserProfile } from "@/components/UserProfile";
import Link from "next/link";

async function getUserData() {
  // Simulo petición a API
  // const response = await fetch("https://api.example.com/user", {
  //   method: "GET",
  // });

  const user = {
    name: "Juan Pérez",
    email: "juan@correo.com",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  };

  return user;
}

export default async function ProfilePage() {
  const user = await getUserData();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-semibold text-center text-white-800 mb-6">
        Perfil de Usuario
      </h1>
      <UserProfile {...user} />
      <div className="mt-6 text-center">
        <Link href="/products">
          <span className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Ver Productos
          </span>
        </Link>
      </div>
    </div>
  );
}
