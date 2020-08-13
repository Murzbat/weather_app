import React,{ Component } from "react";

class WeatherDisplay extends Component {
    constructor() {
        super();
        this.state = {
            weatherData: null
        }
    }

    componentDidMount() {
        const name = this.props.name;
        const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
        name +
        "&appid=ebdf8c726c4b51c2da84411ce50fdc0e&units=metric";
        fetch(URL).then(res => res.json()).then(json => {
            this.setState({weatherData: json})
        })
    }
    render() {
        const weatherData = this.state.weatherData;
        if (!weatherData) return <div>Loading</div>
        const weather = weatherData.weather[0];
        console.log(weather)
        const iconURL = "http://openweathermap.org/img/w/" + weather.icon + ".png";
        return (
            <div>
                <h1>
                    {weather.main} in {weatherData.name}
                    <img src={iconURL} alt={weatherData.description}/>
                </h1>
                <p> Current: {weatherData.main.temp}°С</p>
                <p> High: {weatherData.main.temp_max}°С</p>
                <p> Low: {weatherData.main.temp_min}°С</p>
                <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
            </div>
        );
    }
  }
export default WeatherDisplay;