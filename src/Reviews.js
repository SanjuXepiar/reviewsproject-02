import "./App.css";
import people from "./Data";
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
const Reviews = () => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = people[index];

  // ...Random Button
  const randomButton = () => {
    let random = Math.floor(Math.random() * people.length);
    if (random === index) {
      random = index + 1;
    }
    setIndex(checkIndex(random));
    console.log(random);
  };

  // .. Button Functionality
  const checkIndex = (number) => {
    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return people.length - 1;
    } else {
      return number;
    }
  };

  const nextPerson = () => {
    let newIndex = index + 1;
    setIndex(checkIndex(newIndex));
  };
  const prePerson = () => {
    let newIndex = index - 1;
    setIndex(checkIndex(newIndex));
  };
  return (
    <main>
      <div className="maincentre">
        <img className="img" src={image} alt={name} />
        <div className="imgcentre">
          <h2 className="name">{name}</h2>
          <h3 className="job">{job}</h3>
          <p className="text">{text}</p>
        </div>
        <div className="buttons">
          <button className="buttonLeft" onClick={prePerson}>
            <FaAngleLeft />
          </button>

          <button className="buttonRight" onClick={nextPerson}>
            <FaAngleRight />
          </button>
        </div>
        <button className="random" onClick={randomButton}>
          Random
        </button>
      </div>
    </main>
  );
};
export default Reviews;
