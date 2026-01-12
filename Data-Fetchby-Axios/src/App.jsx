import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  });

  return (
    <>
      <div>
        <h1>User-List</h1>
        <ul>
          {user.map((user) => (
            <li key={user.id}>
              <strong>{user.name} </strong> - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
