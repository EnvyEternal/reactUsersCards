import React, {useState} from 'react';
import { connect } from 'react-redux';
import { downloadUser } from '../../actions';
import axios from 'axios';

const UserStart = (props) => {
    const {createUserAction} = props;
    const [load, setLoad] = useState(false)
    /*const [us, setUs] = useState([])
    fetch(`https://randomuser.me/api/?results=10&page=1`)
         .then((response) => response.json())
         .then(({results}) => {setUs(results)});
*/
    const download = () =>{
        const {request} = axios.get('https://randomuser.me/api/?results=10&page=1')
        .then(response => createUserAction(response.data))
         setLoad(!load)
    }
    return(
        <div>
            <button>Prev</button>
            {!load? <button onClick={download}>Start</button> : null
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

