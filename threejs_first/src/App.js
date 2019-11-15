import React from "react";
import Style from "styled-components";
import Renderer from "./Components/Renderer";
export default () => {
  return (
    <Renderer>
      <H1>threejs</H1>
    </Renderer>
  );
};
const H1 = Style.h1`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Montserrat";
  font-size: 7em;
  text-transform: uppercase;
  width: auto;
  line-height: 0.8em;
  border: 5px solid black;
  padding: 0.2em;
`;
