"use client";

import { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo.trim() }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-semibold text-center text-white-800 mb-6">
        Lista de Tareas
      </h1>
      <div className="mb-6 flex space-x-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Escribe una tarea..."
        />
        <button
          onClick={handleAddTodo}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Añadir
        </button>
      </div>
      <div className="space-y-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between bg-white rounded-lg shadow-lg p-4 transition-all hover:shadow-xl"
          >
            <p className="text-lg text-gray-800">{todo.text}</p>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
