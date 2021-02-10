import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectImage} from '../actions/index';
import {bindActionCreators} from 'redux';
class ImageList extends Component {

    render() { 
       
        return ( 
            <div>
                <>
                {
                    this.props.images.map((image)=>{
                        return(
                            <li key={image.imgId} 
                            onClick={() => this.props.selecImage(image)}
                            >
                                {image.imgName}
                            </li>
                        )
                    })
                }
                </>
            </div>
         );
    }
}
 
function mapStateToProps(state){
    return{
        images: state.allimages
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({selecImage: selectImage}, dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(ImageList);



