import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Python",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Java",
    },
  ];
  //   const personList = persons.map((person) => (
  //     //   key는 전달되는 props가 아니다.
  //     <Person key={person.id} person={person} />
  //   ));
  //   return <div>{personList}</div>;

  const names = ["Bruce", "Clark", "Diana"];
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));
  return <div>{nameList}</div>;
}

export default NameList;
