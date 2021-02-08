import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import AddImage from "./AddImage";
import Body from "./body";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          flag: true,
          images: props.image
        };
      }
  render() {
    return (
      <div>
        <Link className="btn btn-primary mt-2 mr-2" to="/addImage"> Add Image</Link>
      
        <Link className="btn btn-primary mt-2 mr-2" to="/listImage"> List of all Images</Link>
        <Link className="btn btn-primary mt-2 mr-2" to="/users"> List of all Users</Link>
      </div>
    );
  }
}

export default Navigation;
