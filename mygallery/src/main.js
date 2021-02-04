import React, { Component } from 'react';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class  Main extends Component {

    constructor(){
        super();
        this.state={
            flag: true
        }
    }
    
    render() { 
        return ( 
            <div className="container mt-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ImageId</th>
                                <th>Image Name</th>
                                <th>Image Category</th>
                                <th>Image Src</th>
                            </tr>
                        </thead>
                       <tbody>
                           {
                           this.props.image.map((img)=>{
                                return <tr>
                                    <td>{img.imgId}</td>
                                    <td>{img.imgName}</td>
                                    <td>{img.ImageCategory}</td>
                                    <td> <img height="60" width="100" src={img.imgSrc}/> </td>
                                </tr>
                           })
                           }
                       </tbody>
                    </table>
                </div>

         );
    }

    
}
 
export default Main;