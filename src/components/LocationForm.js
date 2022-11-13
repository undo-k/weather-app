function LocationForm(props) {
  return (
    <div>
      <form onSubmit={props.submitForm}>
        <label>Location</label>
        <input
          onChange={props.handleLocationChange}
          required
          placeholder='City'
          type='text'
        ></input>
        <button type='submit'>Ok</button>
        <input
          onClick={props.handleScaleChange}
          name='scale'
          id='fahrenheit'
          type='radio'
          defaultChecked
        ></input>
        <label>Fahrenheit</label>
        <input
          onClick={props.handleScaleChange}
          name='scale'
          id='celsius'
          type='radio'
        ></input>
        <label>Celsius</label>
      </form>
    </div>
  );
}

export default LocationForm;
