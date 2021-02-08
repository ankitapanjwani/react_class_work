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
      <div className="container mt-3">
        <h3>Add Images</h3>
      
        <form onSubmit={this.handleSubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">Image Name: {" "}</label>
                <input type="text"  name="imageName" class="form-control"
                id="exampleInputEmail1"
                value={this.state.imageName}
                onChange={this.handleChange}
                aria-describedby="emailHelp" 
                placeholder="Enter Image Name" />
               
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1"> Image Category:{" "}</label>
                <input name="imgCategory"
                   value={this.state.imgCategory}
                    class="form-control"
                    onChange={this.handleChange}
                     id="exampleCheck1" 
                     placeholder="Enter Image Category"/>
              </div>
          
              <button type="submit" class="btn btn-primary">Submit</button>
        </form>


        {/* <form onSubmit={this.handleSubmit}>
          Image Name:{" "}
          <input
          className="form-group"
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
        </form> */}
      </div>
    );
  }
}

export default AddImage;
