import React from "react";
import { connect } from "react-redux";

const UserList = (props) => {
    
    const {users} = props;
   // data.results[1].gender
   console.log(users)
    
    const mapUser = (key, index) => {
        return(
            <li key={key}>
                {key}
                
            </li>
        );
    };
    return <ul>{1}</ul>;
}

const mapStateToProps = (state) => state.userReducerStates;
/*
const mapDispatchToProps = (dispatch) => {
    return{
        deleteUserAction: id => {
            dispatch(deleteUser(id));
        },
        updateUserAction: newData => {
            dispatch(updateUser(newData));
        },
    }
};*/

export default connect(mapStateToProps)(UserList);