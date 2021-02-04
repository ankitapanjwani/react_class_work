import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   search: ""
    // };
    this.search=React.createRef();
    this.handleChange = this.handleChange.bind(this) ;
    this.handleSubmit = this.handleSubmit.bind(this) ;
  }
  state;

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    alert(this.search.current.value + "to be searched..");
    event.preventDefault();
    
  }

  render() {
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
