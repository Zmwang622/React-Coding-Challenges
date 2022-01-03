import React, { useContext, useEffect, useState, createContext } from "react";

const UserListContext = createContext();

function App() {
  const [userState, setUserState] = useState({
    Bob: true,
    Gary: true,
    Jessica: true,
    Sam: true,
    Eric: true
  });

  return (
    <UserListContext.Provider value={{ userState, setUserState }}>
      <UserList />
    </UserListContext.Provider>
  );
}

const UserList = () => {
  const { userState, setUserState } = useContext(UserListContext);

  const changeRandomUser = () => {
    const keyArray = Object.keys(userState);
    const randomNum = Math.floor(Math.random() * keyArray.length);
    const newUsers = Object.assign({}, userState);
    newUsers[keyArray[randomNum]] = !userState[keyArray[randomNum]];
    setUserState(newUsers);
  };

  useEffect(() => {
    const interval = setInterval(changeRandomUser, 2000);
    return () => clearInterval(interval);
  }, [userState]);

  return (
    <div style={{ padding: 20 }}>
      {Object.entries(userState).map(([username, onlineStatus]) => {
        return <p>{`${username}: ${onlineStatus ? "🟢" : "🔴"}`}</p>;
      })}
    </div>
  );
};

export default App;

