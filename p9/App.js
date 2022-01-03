import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("https://randomuser.me/api?results=200");
      const parsedData = res.data.results.map((user) => {
        return user.name;
      });
      setUsers(parsedData);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <div>
        {users
          .filter((user) =>
            `${user.first} ${user.last}`
              .toLowerCase()
              .startsWith(query.toLowerCase())
          )
          .map((user) => {
            return (
              <p>
                {user.title}. {user.first} {user.last}
              </p>
            );
          })}
      </div>
    </>
  );
}

export default App;
