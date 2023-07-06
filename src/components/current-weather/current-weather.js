import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather-container">
      <div className="weather">
        <div className="main-info">
          <div className="top">
            <div className="city">{data.city}</div>
            <p className="temperature">{Math.round(data.main.temp)}°C</p>
          </div>

          <div className="right-side">
            <img
              alt="weather"
              className="weather-icon"
              src={`icons/${data.weather[0].icon}.png`}
            />
            <p className="weather-description">{data.weather[0].main}</p>
          </div>
        </div>

        <div className="details">
          {/* <div className="parameter-row">
            <span className="parameter-label-detail">Details</span>
          </div> */}
          <div className="parameter-row">
            <p className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </p>
            <p className="parameter-label">Feels Like</p>
          </div>
          <div className="parameter-row">
            <p className="parameter-value">{data.wind.speed}</p>
            <p className="parameter-label">Wind</p>
          </div>
          <div className="parameter-row">
            <p className="parameter-value">{data.main.humidity}%</p>
            <p className="parameter-label">Humidity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
