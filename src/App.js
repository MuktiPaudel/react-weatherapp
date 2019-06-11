import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from "./components/Nav";
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from "./components/Weather";
import Chart from "./components/Chart";
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

  // The charts states are defined here
  constructor(){
   super();
   this.state = {
     chartData : {}
   }
  }
// we just defined the getChartData below now we put it into the lifecycle . 
  componentWillMount(){
    this.getChartData();
  }

  // defining the getChartData()
   getChartData(){
     // ajax call here
     //Now we will take the chartData from the state and fill it here, pass the object on chartData
     this.setState({
        charData : {
          labels: ['Londondfd', 'Paris', 'Helsinki', 'Oulu', 'Kajaani', 'Fili', 'Gdfd', 'Hanyd'],
          datasets : [ 
              {
                  label: 'Population', 
                  data: [
                              617594,
                              404930,
                              504930,
                              409302,
                              502739, 
                              603849
                  ],
                  backgroundColor:[
                      'red',
                      'green',
                      'blue',
                      'pink',
                      'brown'
                  ]
              }
          ]
      }  
     })
   }

 render(){
    //  <Form getWeather = { this.getWeather}/> -This gives the Form.js file an access to the getWeather 
    // function, so Form.js can work with the getWeather
  return (
     <div>
          <BrowserRouter>
           <Nav />
              <Route path="/" exact render={() =>
                <Form getWeather = { this.getWeather}/>
              } />
              <Route path="/" exact render={() => 
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
              } />
              <Route path="/chart" exact render={() =>
                <Chart chartData = {this.state.charData}  location = { this.state.city}/>
              } />             
          </BrowserRouter>
        
      </div>
  );
  }
}

export default App;