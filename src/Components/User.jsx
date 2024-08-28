import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(1);

  const [count2] = useState(2);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <h1>Count2: {count2}</h1>
      <h3>Name: {name}</h3>
      <p>Location: {location}</p>
      <p>This is the Namaste React web series</p>
    </div>
  );
};

export default User;
