import React, { Component } from "react";

class Search extends Component {

  styles = {
    height: 100,
    width: 200
  };
  constructor(props) {
    super(props);
    this.state = {
      ImageCategory:"",
      search: "",
      image:this.props.image
    };
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
   // console.log(this.state.image);
    // console.log(this.search.current.value + "to be searched..");
    event.preventDefault();
var imgSearch = this.state.search;
    {this.state.image.map(imag =>
    {
      if(imag.ImageCategory === imgSearch){
        console.log(imag);
        this.setState({image: imag});
      }
    })}
    
  }

  render() {
   const { images } = this.props;
// console.log(this.state.image);
    return (
      
      <div>
        <h3>Add Images</h3>

        <form onSubmit={this.handleSubmit}>
          Search Image: <input name="search" onChange={this.handleChange} type="text" value={this.state.search}></input>
          <button>Search</button>
        </form>
        {
        this.state.image.map(img => {
          return (
            <div className="card ml-5" style={this.styles}>
            <img
              className="card-img-top mr-5"
              style={this.styles}
              src={img.imgSrc}
            />
            <div className="card-body">
              <h5 className="card-title">{img.imgName}</h5>
              <p className="card-text">{img.imgCategory}</p>
             
            </div>
          </div>
          );
        })
      }
      </div>
      
    );
  }
}

export default Search;
