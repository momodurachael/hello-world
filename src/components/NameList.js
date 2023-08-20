import React from "react";
import Person from "./person";

function NameList() {
  const names = [ 'Bruce',  'clark',  'Diana', 'Bruce'];
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "react",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "vue",
    },
  ];
  const NameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>);
  return <div>{NameList}</div>;
}

export default NameList;
