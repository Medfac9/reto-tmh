import React from "react";

type UserProfileProps = {
  name: string;
  email: string;
  imageUrl: string;
};

export const UserProfile: React.FC<UserProfileProps> = ({
  name,
  email,
  imageUrl,
}) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center space-x-6">
        <img
          src={imageUrl}
          alt="Foto de perfil"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">{name}</h1>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Detalles del perfil
        </h2>
        <p className="text-gray-600 mt-2">
          Aquí podrás ver la información completa del perfil de usuario.
        </p>
      </div>
    </div>
  );
};
