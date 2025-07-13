import React from "react";

const HomePage = () => {
  console.log("HomePage component rendered");

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple React component for the home page.</p>
      <p>Feel free to customize it as needed!</p>
      <button onClick={() => alert("Button clicked!")}>Click Me!</button>
    </div>
  );
};

export default HomePage;
