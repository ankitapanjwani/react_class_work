import React, { Component } from "react";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "./Image";
// import ImageGallery from './imagegallery';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
      images: props.image
    };
  }

  // showflag(){
  //     alert(this.state.flag);
  // }

  toggleFlag = id => {

    const images = [...this.state.images];
    //const newId = id-1;
    images[id].flag = !images[id].flag;

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
             <Image image={img} onClick={this.toggleFlag}></Image>
             {/* <ImageGallery imag={img} toggleflg={this.toggleFlag}></ImageGallery> */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Main;
