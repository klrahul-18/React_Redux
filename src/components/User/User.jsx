import React, { useState } from "react";
import { createStore } from "redux";

function User({ props }) {
  const [value, setValue] = useState("");
  const reducer = (state = value, action) => {
    if (action.type == "Login") {
      return (state = "Login Success");
    } else {
      return (state = "Login Fail");
    }
  };
  const store = createStore(reducer);
  store.subscribe(() => {
    //alert(store.getState());
    setValue(store.getState());
  });
  return (
    <div>
      <h1 className="text-center text-2xl mt-2 font-bold text-red-500">
        {props.Greet}KL RAHUL DIGITAL
      </h1>
      <h2 className="text-center text-2xl mt-2 font-bold text-purple-500">
        {value}
      </h2>
      <button
        className="bg-blue-500 mx-40 mt-8 rounded py-2 px-4 text-white font-bold"
        onClick={() =>
          store.dispatch({
            type: "Login", //action
          })
        }
      >
        Login
      </button>
    </div>
  );
}

export default User;
