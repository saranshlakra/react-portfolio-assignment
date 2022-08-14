// import logo from './logo.svg';
import "./App.css";
import Headers from "./MyComponents/Headers";
import Body from "./MyComponents/Body";
import { Fragment } from "react";
import BodyExperience from "./MyComponents/BodyExperience";
import Project from "./MyComponents/Projects";
import BodyContact from "./MyComponents/BodyContact";
import Contact from "./MyComponents/contact";

function App() {
  return (
    <Fragment>
      <Headers />
      <Body />
      <BodyExperience />
      <Project />
      <Contact />
    </Fragment>
  );
}

export default App;
