import React, {useState} from 'react';
import { connect } from 'react-redux';
import { downloadUser } from '../../actions';
import UserList from '../UserList';

const UserStart = (props) => {
    const {createUserAction} = props;
    const [load, setLoad] = useState(false)
    const {users} = props

    const download = () =>{
        
        fetch(`https://randomuser.me/api/?inc=name,login,email&results=10`)
        .then((response) => response.json())
        .then(({ results }) => createUserAction(results))
        .then(() => setLoad(true))
    }

    const mapUsers = (u) => {
        return <UserList key={u.login.md5} u={u} />
    }

    return(
        <div>
            <button>Prev</button>
            <button>Next</button>
            {!load?
            <div>
                For load Users click
            <button onClick={download}>Start</button></div>  
            : 
            <li className='Li'>{users.map(mapUsers)}</li>
                }
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


