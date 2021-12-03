import React, {useState} from 'react';
import { connect } from 'react-redux';
import { downloadUser } from '../../actions';
import axios from 'axios';
import UserList from '../UserList';

const UserStart = (props) => {
    const {createUserAction} = props;
    const [load, setLoad] = useState(false)
    const {users} = props
    /*const [us, setUs] = useState([])
    fetch(`https://randomuser.me/api/?results=10&page=1`)
         .then((response) => response.json())
         .then(({results}) => {setUs(results)});
*/
    const download = () =>{
        
        fetch(`https://randomuser.me/api/?inc=name,login,email&results=10`)
        .then((response) => response.json())
        .then(({ results }) => createUserAction(results))
        .then(() => setLoad(true))
    }

    const mapUsers = (u) => {
        console.log('U'+u)
        return <UserList key={u.login.md5} u={u} />
    }
    return(
        <div>
            <button>Prev</button>
            {!load? <button onClick={download}>Start</button> : <li>{users.map(mapUsers)}</li>
                }
            <button>Next</button>
        </div>
    );
}
const mapStateToProps = state => state.userReducerStates;

 const mapDispatchToProps = dispatch => {
     return{
         createUserAction: data => {
             
             dispatch(downloadUser(data));
         }
     };
 };

export default connect(mapStateToProps, mapDispatchToProps) (UserStart);



/*import React, { useState, useEffect } from 'react'
//import UserData from '../users/userData';
import axios from 'axios';

const UserAxio = () =>{
    const [users, setUsers] = useState([])

   
        useEffect(() => {
            const apiUrl = 'https://jsonplaceholder.typicode.com/users';
            axios.get(apiUrl).then((resp) => {
              const allPersons = resp.data;
              setUsers(allPersons);
            });
          }, [setUsers]);

    return(
        <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    )
}

export default UserAxio
    //{ this.state.persons.map(person => <li>{person.gender}</li>)}
//export default UserAxio

//https://randomuser.me/api/?results=10&page=1 */