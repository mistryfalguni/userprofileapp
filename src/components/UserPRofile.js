import React from 'react'
import Axios from 'axios'
import { Col, Row, Nav, NavItem, NavLink} from 'reactstrap'

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import UserInfo from './UserInfo'
import GoogleMapReact from 'google-map-react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import MapContainer from '../components/MapContainer '

/**
 * Component for profile page
 * display user profilepicture and data
 * 
 */
                       
class UserProfile extends React.Component {
    constructor(){
        super()
        this.state  = {
            user : {}
        }
    }

    componentDidMount = () => {
        Axios.get("https://panorbit.in/api/users.json")
            .then(users => {
                this.setState({user : users.data.users.find(user => user.username === this.props.match.params.username)}, () => console.log(this.state.user))
            })
    }

    render(){

        const {user} = this.state;
        const pathName =  window.location.pathname;
        const pathNameArray = window.location.pathname.split('/');
        const userName = pathNameArray.length > 1 ? pathNameArray[1] : '';
        

        return (
            <div> 
                <Row style = {{margin : "50px"}} >
                    <Col md="2" className="profileMenu">
                        <Nav vertical className='navbar'>
                            <NavItem>
                                <NavLink href={`/${userName}/profile`}><span>Profile</span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={`/${userName}/posts`}><span>Posts</span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={`/${userName}/gallery`}><span>Gallery</span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={`/${userName}/toDo`}><span>ToDo</span></NavLink>                      
                            </NavItem>                    
                        </Nav>                   
                    </Col>
                    <Col md="10" className = "text-center" >
                        <Row>
                            <Col md="12">
                                <Row className="mt-4 mb-5 ml-4 pb-4" style={{borderBottom: "1px solid #808080"}}>
                                    <Col md="7" className ="text-left  profileTitle textColor">Profile</Col>
                                    <Col md="4">
                                    <h6 className = "text-right md-4" style = {{cursor : "pointer"}} > 
                                    <img src = {user.profilepicture} width = "45px" style = {{borderRadius : "50%", height : "45px"}} /> &nbsp;&nbsp;
                                    {user.name}</h6>
                                    </Col>                               
                                </Row>
                                <Row>                                                      
                                    <Col md="5" style={{borderRight: "1px solid #808080"}}>
                                        <img src = {user.profilepicture}
                                            className="userProfileImg"
                                            height="262px"
                                            width= "262px"/> 
                                        <div className="userDetails pb-4">
                                            <h5 className="my-3" style = {{color : "#545454"}} >{user.name}</h5>                   
                                            <UserInfo name = "Username" value = {user.username} />
                                            <UserInfo name = "E-Mail" value = {user.email} />
                                            <UserInfo name = "Phone" value = {user.phone} />
                                            <UserInfo name = "Website" value = {user.website} />
                                        </div>
                                        <h5 className="lightTextColor my-2">Company</h5>
                                        <UserInfo name = "Name" value = {user.company && user.company.name} />
                                        <UserInfo name = "Catchphrase " value = {user.company && user.company.catchPhrase} />
                                        <UserInfo name = "bs" value = {user.company && user.company.bs} />
                                    </Col>
                                    <Col md="7">
                                        <Row>
                                            <Col md = "6">
                                            <h5 className="lightTextColor my-2 text-left" >Address:</h5>
                                        <UserInfo name = "Street" value = {user.address && user.address.street} />
                                        <UserInfo name = "Suite" value = {user.address && user.address.suite} />
                                        <UserInfo name = "City" value = {user.address && user.address.city} />
                                        <UserInfo name = "Zipcode" value = {user.address && user.address.zipcode} />

                                        <div className = "map" style = {{top: "500px",left: "500px",width: "597px",height: "436px",opacity: 1}} >
                       <img src = "https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png" style = {{width : "500px", borderRadius : "30px"}} />
                    
                       </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>                    
                        </Row>
                    </Col> 
                </Row>
            </div>
        )
    }
}

export default UserProfile


