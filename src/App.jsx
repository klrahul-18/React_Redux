import React from "react";
import User from "./components/User/User";
import Colorchanger from "./components/Colorchanger/Colorchanger";

function App() {
  const day = {
    Greet: "Welcome ",
  };
  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-indigo-500 mt-4  ">
        Welcome To React Redux
      </h1>
      <User props={day} />
      <Colorchanger/>
    </div>
  );
}

export default App;
