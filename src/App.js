import React from "react";
import Formulario from "./componentes/Formulario";
import "./styles.css";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Formulario />
      </div>
    );
  }
}
