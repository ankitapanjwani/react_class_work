import React, { Component } from "react";
import {Link} from 'react-router-dom';
class Image extends Component {

    styles = {
        height: 100,
        width: 300
      };
  render() {
    const { image, onClick } = this.props;

    return (
      <div>
        {image.flag ? (
          <div className="card ml-5" style={this.styles}>
            <img
              className="card-img-top mr-5"
              style={this.styles}
              src={image.imgSrc}
            />
            <div className="card-body">
              <h5 className="card-title">{image.imgName}</h5>
              <p className="card-text">{image.imgCategory}</p>
              <button
                href="#"
                className="btn btn-primary"
                onClick={() => {
                  onClick(image.imgId);
                }}
              >
                Hide
              </button>
                &nbsp;
                <Link  className="btn btn-primary" to={`/listImage/${image.imgId}`}>Show in Detail</Link>


            </div>
          </div>
        ) : (
          <div class="card ml-5">
            <div class="card-body">
              <button
                href="#"
                className="btn btn-primary"
                onClick={() => {
                  onClick(image.imgId);
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

export default Image;
