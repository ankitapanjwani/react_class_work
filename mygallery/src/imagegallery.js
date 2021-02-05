import React, { Component } from 'react';



class ImageGallery extends Component {
    styles = {
        height: 100,
        width: 200
      };
    render() { 
        const {imag, toggleflg} = this.props;
        return (  
            <div>
            {imag.flag ? (
              <div className="card ml-5" style={this.styles}>
                <img
                  className="card-img-top mr-5"
                  style={this.styles}
                  src={imag.imgSrc}
                />
                <div className="card-body">
                  <h5 className="card-title">{imag.imgName}</h5>
                  <p className="card-text">{imag.imgCategory}</p>
                  <button
                    href="#"
                    className="btn btn-primary"
                    onClick={() => {
                        toggleflg(imag.imgId);
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
                        toggleflg(imag.imgId);
                    }}
                  >
                    Show
                  </button>
                </div>
              </div>
            )}
          </div>
        );
    }
}
 
export default ImageGallery;