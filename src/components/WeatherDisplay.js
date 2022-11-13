const fahrenheit = (kelvin) => {
  return Math.trunc((kelvin - 273.15) * (9 / 5) + 32);
};

const celsius = (kelvin) => {
  return Math.trunc(kelvin - 273.15);
};

function WeatherDisplay(props) {
  const weather = props.main;
  const unit = props.scale === 'fahrenheit' ? '° F' : '° C';
  const scaleTemp = (temp) => {
    return props.scale === 'fahrenheit' ? fahrenheit(temp) : celsius(temp);
  };

  return (
    <div>
      <p>
        It is currently {scaleTemp(weather.temp)}
        {unit} in {props.location}, but the vibe is more like{' '}
        {scaleTemp(weather.feels_like)}
        {unit}. Today's high for {props.location} is{' '}
        {scaleTemp(weather.temp_max)}
        {unit} while the low is {scaleTemp(weather.temp_min)}
        {unit}.
      </p>
    </div>
  );
}

export default WeatherDisplay;
