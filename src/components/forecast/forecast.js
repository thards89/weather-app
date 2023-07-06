import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <div className="forecast-welcome-text-container">
        <div className="forecast-welcome-text">7 DAYS FORECAST</div>
      </div>
      <div className="forecast-container">
        <Accordion allowZeroExpanded>
          {data.list.splice(0, 7).map((item, idx) => (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <div className="daily-item-left">
                      <label className="day">
                        {forecastDays[idx].toUpperCase()}
                      </label>
                      <label className="forecast-temperature">
                        {" "}
                        {Math.round(item.main.temp)}°C
                      </label>
                      <label className="forecast-min-max">
                        <b>Max:</b> {Math.round(item.main.temp_max)}°C{" "}
                        <b>Min:</b> {Math.round(item.main.temp_min)}°C
                      </label>
                    </div>
                    <div className="daily-item-right">
                      <img
                        src={`icons/${item.weather[0].icon}.png`}
                        className="forecast-icon-small"
                        alt="weather"
                      />
                      <label className="forecast-description">
                        {item.weather[0].description.toUpperCase()}
                      </label>
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label>
                      <b>Pressure: </b>
                    </label>
                    <label>{item.main.pressure}</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>
                      <b>Humidity: </b>
                    </label>
                    <label>{item.main.humidity}</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>
                      <b>Clouds: </b>
                    </label>
                    <label>{item.clouds.all}%</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>
                      <b>Wind speed: </b>
                    </label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>
                      <b>Sea level: </b>
                    </label>
                    <label>{item.main.sea_level}m</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>
                      <b>Feels like: </b>
                    </label>
                    <label>{item.main.feels_like}°C</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Forecast;
