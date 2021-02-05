import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ImageCategory: "",
      image:this.props.image
    };
    this.search = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state;

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
   // console.log(this.state.image);
    console.log(this.search.current.value + "to be searched..");

    {this.state.image.map(image =>
    {
      if(image.ImageCategory === this.search.current.value){
        console.log(image);
      }
    })}
    
    event.preventDefault();
  }

  render() {
   // const { images } = this.props;

    return (
      <div>
        <h3>Add Images</h3>

        <form onSubmit={this.handleSubmit}>
          Search Image: <input type="text" ref={this.search}></input>
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
