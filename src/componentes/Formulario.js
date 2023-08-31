import React from "react";
import Input from "./Input";
export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Input />
        <Input />
        <Input />
      </div>
    );
  }
}
