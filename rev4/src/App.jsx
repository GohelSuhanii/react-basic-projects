import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: input, isCompleted: false }]);
      setInput("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div
      className={`min-w-screen min-h-screen max-h-screen max-w-full flex items-center justify-center transition-colors ${
        darkMode ? "bg-slate-900" : "bg-slate-100"
      }`}
    >
      <div
        className={`w-96 p-6 rounded-xl shadow-xl ${
          darkMode ? "bg-slate-800 text-white" : "bg-white"
        }`}
      >
        <div className="flex justify-between items-center mb-4 ">
          <h1 className="text-2xl font-bold text-blue-500">Todo App</h1>
          <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
            {darkMode ? "🔆" : "🌙"}
          </button>
        </div>

        {/* input  */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Add a todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={`flex-1 p-2 rounded border focus:outline-none text-black ${
              darkMode ? "bg-slate-700 border-slate-600 text-white" : "bg-white"
            }`}
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-3 rounded hover:bg-blue-600"
          >
            ➕
          </button>
        </div>

        {/* todos  */}
        {todos.length === 0 ? (
          <p className="text-center italic text-gray-400">No Todos 🚫</p>
        ) : (
          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex items-center justify-between p-3 rounded-lg transition-all
                  ${
                    todo.completed
                      ? "bg-gradient-to-r from-green-200 to-green-100 line-through text-green-700"
                      : darkMode
                      ? "bg-slate-700"
                      : "bg-gray-100"
                  }`}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span>{todo.text}</span>
                </div>

                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
