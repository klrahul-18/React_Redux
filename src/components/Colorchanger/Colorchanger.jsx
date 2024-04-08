import React, { useState } from "react";
import { createStore } from "redux";

function Colorchanger() {
  const [style, setStyle] = useState({ color: "" });

  const reducer = (state = {}, action) => {
    if (action.type == "blue") {
      return (state = {
        color: "blue",
      });
    } else if (action.type == "green") {
      return (state = {
        color: "green",
      });
    } else if (action.type == "red") {
      return (state = {
        color: "red",
      });
    } else if (action.type == "orange") {
      return (state = {
        color: "orange",
      });
    } else if (action.type == "purple") {
      return (state = {
        color: "purple",
      });
    } else if (action.type == "lime") {
      return (state = {
        color: "lime",
      });
    } else if (action.type == "salmon") {
      return (state = {
        color: "salmon",
      });
    }
  };
  const store = createStore(reducer);
  store.subscribe(() => {
    const res = store.getState();
    setStyle({ color: res.color });
    //alert (store.getState());
  });
  return (
    <div>
      <h1 className="text-center text-3xl font-bold" style={style}>
        Colorchanger
      </h1>
      {/* <select
        className="mx-40"
        onChange={(e) => {
          alert(e.target.value);
        }}
      > */}
      <select
        className="mx-40"
        onChange={(e) => {
          store.dispatch({
            type: e.target.value,
          });
        }}
      >
        <option value="green">Green</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="purple">Purple</option>
        <option value="lime">Lime</option>
        <option value="salmon">Salmon</option>
      </select>
    </div>
  );
}

export default Colorchanger;
