import React, { Component } from "react";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
      images: props.image
    };
   
  }
  styles = {
    height: 100,
    width: 200
  };

  // showflag(){
  //     alert(this.state.flag);
  // }

  toggleFlag = (id) => {
    // const image_copy = this.state.images.filter(image => image.imgId !== id);
    // console.log(image_copy);

const images = [...this.state.images];
//const newId = id-1;
images[id].flag = !images[id].flag

    this.setState({
      flag: !this.state.flag,
      images: images
    });

    //  this.showflag();
  };

  render() {
    // console.log(this.state.flag,this.state.name);
    // console.log(this.state.images);
    return (
      <div class="row mt-5">
        {this.state.images.map(img => {
          return (
            <div>
              {img.flag ? (
                <div className="card ml-5" style={this.styles}>
                  <img
                    className="card-img-top mr-5"
                    style={this.styles}
                    src={img.imgSrc}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{img.imgName}</h5>
                    <p className="card-text">{img.imgCategory}</p>
                    <button
                      href="#"
                      className="btn btn-primary"
                      onClick={() => {
                        this.toggleFlag(img.imgId);
                      }}
                    >
                      Hide
                    </button>
                  </div>
                </div>
              ) : (
                <div class="card ml-5">
                  <div class="card-body">
                    <button
                      href="#"
                      className="btn btn-primary"
                      onClick={() => {
                        this.toggleFlag(img.imgId);
                      }}
                    >
                      Show
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Main;
