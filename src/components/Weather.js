import React, { Component } from 'react'

export class Weather extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.city} {this.props.country}</h2>
                <p>Temprature : {this.props.temprature} C</p>
                <p>Air pressure: {this.props.air_pressure}</p>
                <p>Coordinates
                  <ol>Lon: {this.props.longititude}</ol>
                  <ol>Lat: {this.props.latitude}</ol>
                </p>

            </div>
        )
    }
}

export default Weather
