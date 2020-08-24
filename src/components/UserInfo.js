import React from 'react'
import { Col, Row } from 'reactstrap'


/**
 * Component for userinfo display name and value
 *
 * @param name
 * @param value
 */
const UserInfo = (props) => {
    return (    
        <Row>
            <Col md = "6" className = "text-right lightTextColor" style = {{fontSize:'20px'}} >
                {props.name} : 
            </Col>
            <Col md = "6" className = "text-left textColor pl-0" style = {{ fontSize:'22px'}} >
                {props.value}
            </Col>
        </Row>
    )
}

export default UserInfo