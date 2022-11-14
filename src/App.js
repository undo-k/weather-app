import WeatherDisplay from './components/WeatherDisplay';
import LocationForm from './components/LocationForm';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: 'Seattle',
      city: 'Seattle',
      main: {},
      scale: 'fahrenheit',
    };

    this.fetchWeather = this.fetchWeather.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleLocationChange = (event) => {
    this.setState({
      location: event.target.value,
    });
  };

  handleScaleChange = (event) => {
    this.setState({
      scale: event.target.id,
    });
  };

  async fetchWeather() {
    return fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        this.state.location +
        '&appid=6784242ca313d087d672ec45ec05d24a',
      {
        mode: 'cors',
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({
          main: response.main,
        }); //
      });
  }

  componentDidMount() {
    this.fetchWeather();
  }

  submitForm(event) {
    event.preventDefault();
    this.fetchWeather();
    this.setState({
      city: this.state.location,
    });
  }

  render() {
    return (
      <div className='App'>
        <LocationForm
          submitForm={this.submitForm}
          handleLocationChange={this.handleLocationChange}
          handleScaleChange={this.handleScaleChange}
        ></LocationForm>
        <WeatherDisplay
          main={this.state.main}
          location={this.state.city}
          scale={this.state.scale}
        ></WeatherDisplay>
      </div>
    );
  }
}

export default App;
