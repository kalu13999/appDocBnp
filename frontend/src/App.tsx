import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center p-8">
      <header className="w-full max-w-4xl mb-8">
        <h1 className="text-4xl font-bold text-center">DocFlow Manager</h1>
        <p className="mt-2 text-center text-lg">Inicia aqui o teu fluxo de trabalho documental.</p>
      </header>

      <main className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Demo Counter</h2>
        <div className="flex items-center space-x-4">
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none"
            onClick={() => setCount((c) => c + 1)}
          >
            Incrementar
          </button>
          <span className="text-xl font-medium">Contador: {count}</span>
        </div>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Edita este componente para desenvolver as funcionalidades da aplicação.
        </p>
      </main>

      <footer className="mt-auto text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} DocFlow Manager
      </footer>
    </div>
  );
}
