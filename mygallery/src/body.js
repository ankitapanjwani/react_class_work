import React, { Component } from "react";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "./Image";
// import ImageGallery from './imagegallery';
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
      
    };
  }
  images =[
    {
    imgId: 0,
    imgName: "Flower",
    ImageCategory: "Nature",
    imgSrc: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    flag: true
  },
  {
    imgId: 1,
    imgName: "Shirts",
    ImageCategory: "Cloth Wear",
    imgSrc: "https://www.thoughtco.com/thmb/bMpVlJO3cIbaDNa-z9WuOk7oFRo=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg",
    flag: true
  },
  {
    imgId: 2,
    imgName: "Children",
    ImageCategory: "Human",
    imgSrc: "https://www.cdc.gov/vaccines/programs/vfc/images/kindergarten-kids.jpg",
    flag: true
  },
  {
    imgId: 3,
    imgName: "Animals",
    ImageCategory: "Nature",
    imgSrc: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-baby-animals-1558535060.jpg",
    flag: true
  },
  {
    imgId: 4,
    imgName: "Rain",
    ImageCategory: "Nature",
    imgSrc: "https://m.economictimes.com/thumb/msid-64820747,width-1200,height-900,resizemode-4,imgsize-244634/rainfall.jpg",
    flag: true
  }


];
  
  // showflag(){
  //     alert(this.state.flag);
  // }

  toggleFlag = id => {

    const images = [...this.images];
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
        {this.images.map(img => {
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

export default Body;
