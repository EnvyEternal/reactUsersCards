import React from "react";
import { connect } from "react-redux";

const UserList = (props) => {
    
    const {users} = props;
   
    
   // data.results[1].gender
   console.log('hello', users)
   
    
    const mapUser = (element) => {
       
        console.log('element '+ element)
    
    };
    return <ul>{users.map(mapUser)}</ul>;
}

const mapStateToProps = (state) => state.userReducerStates;


export default connect(mapStateToProps)(UserList);