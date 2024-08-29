import { useEffect, useState } from "react";
import { json } from "react-router-dom";

const User = ({ name, location }) => {
  const [count, setCount] = useState(1);

  const [count2] = useState(2);
useEffect(()=> 
{
    fetchURL()
},[])
  const handleIncrement = () => {
    setCount(count + 1);
  };
    async function fetchURL() {
    const response = await fetch("https://api.github.com/users/thakurbhagyashri");
    const json = await response.json();
    console.log(json); 
 
  }
  const {login,id}=json;
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <h1>Count2: {count2}</h1>
      <h3>Name: {name}</h3>
      <p>Login:{login}</p>
      <p>id:{id}</p>
      <p>Location: {location}</p>
      <p>This is the Namaste React web series</p>
    </div>
  );
};

export default User;
