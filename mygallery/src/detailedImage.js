import React, { Component } from 'react';

class DetailedImage extends Component {
    
    styles = {
        height: 100,
        width: 300
      };
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

       
        imagewithid = this.images.find( (img)=> {
                console.log(this.props.match.params.id);
                console.log(img.imgId);
                 return img.imgId == this.props.match.params.id;
            });
         
    
    render() { 
    const image = this.imagewithid;
        //  console.log(image);
        return ( 
            <div className="card ml-5" style={this.styles}>
            {/* {console.log(image.imagewithid)} */}
            <img
              className="card-img-top mr-5"
             
              src={image.imgSrc}
            />
            <div className="card-body">
              <h5 className="card-title">{image.imgName}</h5>
              <p className="card-text">{image.imgCategory}</p>
             
            </div>
          </div>
         );
    }
}
 
export default DetailedImage;
