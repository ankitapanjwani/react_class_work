import React, { Component } from "react";

class AddImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageName: "",
      imgCategory: ""
    };
    this.handleChange = this.handleChange.bind(this) ;
    this.handleSubmit = this.handleSubmit.bind(this) ;
  }
  
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    const { imageName, imgCategory } = this.state;
    event.preventDefault();
    alert(` 
      ____IMAGE  Details____\n 
      Image Name : ${imageName} 
      Image Category  : ${imgCategory} 
    `);
  }

  render() {
    return (
      <div>
        <h3>Add Images</h3>

        <form onSubmit={this.handleSubmit}>
          Image Name:{" "}
          <input
            type="text"
            name="imageName"
            value={this.state.imageName}
            onChange={this.handleChange}
          />
          Image Category:{" "}
          <input
            type="text"
            name="imgCategory"
            value={this.state.imgCategory}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddImage;
