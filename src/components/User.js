import { useState } from "react";

const User = ({ name }) => {

  const [count] = useState(0)
  const [count2] = useState(1)    //This is how we use multiple useState variable in function component.


  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Rajasthan</h3>
      <h4>Contact: nitinpurohit412@gmail.com</h4>
    </div>
  );
};

export default User;
