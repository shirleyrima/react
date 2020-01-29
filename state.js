import React, { useState } from "react";
import "./App.css";
import Siri from "./Siri/Siri";

const App = props => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Scott", age: 21 },
      { name: "Alan", age: 22 },
      { name: "Troll", age: 23 }
    ],
  });

  const [otherState, setOtherState] = useState({
    otherState: "some other value"
  });

  console.log(personState, otherState);

  const switchNameHandler = () => {
    //console.log("was clicked");
    setPersonState({
      persons: [
        { name: "Scott", age: 100 },
        { name: "Alan", age: 22 },
        { name: "Siri", age: 21 }
      ]
    });
  };

  return (
    <div>
      <h1>Hi! World!</h1>
      <button onClick={switchNameHandler}>switch</button>
      <Siri name={personState.persons[0].name} age={personState.persons[0].age}>
        {" "}
        My words: mei chi ne
      </Siri>
      <Siri
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      />
      <Siri
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      />
    </div>
  );
  //return React.createElement("div", null, "h1", "Hi world");
};

export default App;
