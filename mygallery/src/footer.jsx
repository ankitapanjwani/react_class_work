import React, { Component } from 'react';
import './footer.css';


class  Footer extends Component {
    constructor(){
        super()
        console.log("Inside constructor");
    }
   componentDidMount(){
       console.log("Inside component did mount...");
   }
    render() { 
        console.log("Inside Render...");
        return ( 
            <footer className="footer">
            {this.props.message}
            </footer>

         );
    }

    componentDidUpdate(){
        console.log("Inside components did update...");
    }
    componentWillUnmount(){
        console.log("Inside coponent will unmount..");
    }
}
 
export default Footer;

