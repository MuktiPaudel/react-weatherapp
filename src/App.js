import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from "./components/Weather";
//  import "~react-vis/dist/style";
import './App.css';


const API_KEY = "665ca35e37cfb8e869ec941288c96ed0";

class App extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    temprature: undefined,
    air_pressure: undefined,
    longititude: undefined,
    latitude: undefined,
    weather:undefined,
    error: undefined

  }
  getWeather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // next style: fetch and json data formatting done in two line
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    // next style: fetch and json data formatting done in same line
    const tmp = await(await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}`)).json();
    console.log(tmp);

    const data = await api_call.json();
    // console.log(data);

    this.setState({
      city: data.name,
      country:data.sys.country,
      temprature: data.main.temp,
      air_pressure:data.main.pressure,
      longititude: data.coord.lon,
      latitude:data.coord.lat,
      weather: data.weather[0].description,
      erro: ''


    })
  }
  render(){
    //  <Form getWeather = { this.getWeather}/> -This gives the Form.js file an access to the getWeather 
    // function, so Form.js can work with the getWeather
  return (
     <div>
          <Titles/>
          
          <Form getWeather = { this.getWeather}/>

          <Weather
                temprature = {this.state.temprature}
                city ={ this.state.city}
                country =  { this.state.country}
                air_pressure = {this.state.air_pressure}
                longititude = {this.state.longititude}
                latitude = {this.state.latitude}
                weather = {this.state.weather} 
                error = {this.state.error} 
          />
      </div>
  );
  }
}

export default App;
