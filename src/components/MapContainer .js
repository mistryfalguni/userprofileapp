import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '60%',
    height: '40%',
  };

const MapContainer=(props)=> {
    console.log("map props",props)
   
        return (
            
            <Map
            google={props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={props.address.geo}
          />
            
        )
    
}

export default GoogleApiWrapper({
    apiKey: 'TOKEN HERE'
  })(MapContainer);
