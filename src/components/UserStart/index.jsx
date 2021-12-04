import React, {useState} from 'react';
import { connect } from 'react-redux';
import { downloadUser } from '../../actions';
import UserList from '../UserList';

const UserStart = (props) => {
    const {createUserAction} = props;
    const {users} = props;
    const [load, setLoad] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    const download = () =>{
        (async () => {
            const response = await
        fetch(`https://randomuser.me/api/?page=${currentPage}&results=10&seed=abc`)
        .then((response) => response.json())
        .then(({ results }) => createUserAction(results))
        .then(() => setLoad(true),[currentPage])
        })()
    }

    const mapUsers = (u) => {
        return <UserList key={u.login.md5} u={u} />
    }
    const next = () =>{
        setCurrentPage(currentPage+1)
        download()
        console.log(currentPage)
    }

    const prev = () =>{
        if(currentPage < 1){alert('wrong')} else{
        setCurrentPage(currentPage-1)
        download()
        console.log(currentPage)}
    }
    return(
        <div>
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
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


