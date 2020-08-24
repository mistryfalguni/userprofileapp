import React,{Component} from 'react'
import Axios from 'axios'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../App.css'


/**
 * Component for show userlist 
 * fetch userlist from api
 */
class UserList extends Component {
    constructor(){
        super()
        this.state = {
            users : []
        }
    }

    componentDidMount = () => {
        Axios.get("https://panorbit.in/api/users.json")
            .then(users => this.setState({users : users.data.users}))
            .catch(err => alert(err))
    }

    render(){
        const { users } = this.state;
        return(
            <div className = "container-fluid" >
                <div className = "container position-relative" >
                    <div className="userList position-absolute">
                        <h6 className="userTitle m-4 text-center">Select an Account </h6>
                        <div>
                            <Nav vertical>
                            {
                                users.map(user => (
                                    <NavItem>
                                        <NavLink href={`/${user.username}/profile`}>
                                        <img
                                        src = {user.profilepicture}
                                        className="userImage"
                                        width = "42px"
                                        height="42px" />
                                            <span className="userName ml-3" >
                                                {user.name}
                                            </span>
                                        </NavLink>
                                    </NavItem>
                                ))
                            }
                            </Nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserList