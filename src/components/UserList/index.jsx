import React,{useEffect, useState} from "react";
import { connect } from "react-redux";

const UserList = (props) => {
        const {u} = props;
            return(
                <li>
                   <ul>{u.name.title} {u.name.first}</ul>
                   <ul>{u.name.last}</ul>
                   <ul>{u.email}</ul>
                </li>
            );
}

export default UserList;