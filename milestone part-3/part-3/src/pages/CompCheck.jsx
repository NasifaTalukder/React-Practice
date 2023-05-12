import React from 'react';
// -------Anonymous Function-------
let greet = function (name){
    console.log(`hello ${name}`);
}

// -----------Arrow Function----------
let Arrow=()=>console.log("Hiiii..");
Arrow();

// -------Invoked Function---------
(function (){
    let name = "Nasifa Talukder.."
    console.log(name);
})();

// ----------Higher Order Function---------
let number=[12,30,40,57];
let newNumber =number.map((Element)=>Element+20);
console.log(newNumber)

// ----------Construction Function--------

function person(name,place){
    this.name=name;
    this.place=place;
}
let user = new person("Nasifa", "Chittagong");
console.log(`Hello Everyone I am ${user.name}and I am from ${user.place}`);

greet("nasifa");
const CompCheck = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default CompCheck;
