import React, { Component } from 'react';
import axios from 'axios';


class UsersList extends Component {
    styles={
        width: "18rem"
    }
    constructor(){
        super();
        this.state ={
            users: []
        }
    }
    styles={
        borderLeft: "2px solid black"
    }
  componentDidMount(){
    axios.get('https://reqres.in/api/users')
    .then((res)=>{
        // console.log(res.data.data);
        const users = res.data.data;
        this.setState({users});
    })
  }
    render() { 
        console.log(this.state.users);
        return (  
         
                  <div className='row ml-2'>

                        
                {this.state.users.map((user)=> {
                        return (
                            <div className="col-md-3">
                            <div class="card m-2" style={this.styles} >
                            <img class="card-img-top" width='200' height='200' src={user.avatar} alt="Card image cap" />
                            <div class="card-body">
                            
                              <h5 class="card-text">{user.first_name} {user.last_name}</h5>
                           
                              <p class="card-text">{user.email}</p>
                              
                            </div>
                          </div>
                          </div>   
                        );
                    })
                }
                </div>
                  
        );
                 
    }
}
 
export default UsersList;