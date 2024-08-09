import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
    "div", 
    {id : "parent"}, 
          [ React.createElement("div", {id: "child1"},[
            React.createElement("h1",{} , "I am a child of h1 tag"),
            React.createElement("h2",{} , "I am a child of h2 tag"),
         ]
 ,          React.createElement("div", {id: "child2"},[
            React.createElement("h1",{} , "I am a child of h1 tag"),
            React.createElement("h2",{} , "I am a child of h2 tag"),
 ]
))]
);
console.log(parent);

// const heading = React.createElement("h1" ,
//     {id: "heading"},
//      "Hello react World!"
//     );

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);

