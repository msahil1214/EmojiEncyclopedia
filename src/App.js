import React from "react";
import Card from "./Card";
import emojis from "./emojis";

function createCard(props) {
  return (
    <Card
      emoji={props.emoji}
      category={props.category}
      description={props.description}
      imgurl={props.imgURL}
    />
  );
}

function App() {
  return (
    <main className="center">
      <div className="centerdiv">
        <h1 className="heading1"> Emoji Encyclopedia </h1>
        {emojis.map(createCard)}

        <h1 className="heading">This is rendered using Card.jsx</h1>
      </div>
    </main>
  );
}

export default App;
