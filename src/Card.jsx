import React from "react";

function Card(props) {
  return (
    <section className="container center">
      <div className="center">
        <div className="person">
          <h2>{props.emoji}</h2>
        </div>
        <div>
          <h2>{props.category}</h2>
          <p>Description: {props.description}</p>
        </div>
      </div>
    </section>
  );
}

export default Card;
