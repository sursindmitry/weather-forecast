import React, {useState} from 'react';
import './App.scss';
import Inputs from './components/Inputs';
import TopButtons from "./components/TopButtons";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import ForecastDaily from "./components/Forecast/DailyForcast/ForecastDaily";
import Footer from "./components/Footer";
import HourlyForecast from "./components/Forecast/HourlyForecast/HourlyForecast";
import ForecastHourly from "./components/Forecast/HourlyForecast/ForecastHourly";

function App() {
    const [latitude, setLatitude] = useState(53.7557);
    const [longitude, setLongitude] = useState(87.1099);
    const [timezone, setTimezone] = useState("Asia/Novokuznetsk");
    const [cityName, setCityName] = useState("Novokuznetsk");
    const [cityCountry, setCityCountry] = useState("Russia");
    const [region, setRegion] = useState("Kemerovo Oblast");


    const updateLatitude = (newLatitude) => {
        setLatitude(newLatitude);
    };
    const updateLongitude = (newLongitude) => {
        setLongitude(newLongitude);
    };
    const updateTimezone = (newTimezone) => {
        setTimezone(newTimezone);
    };
    const updateCityName = (newCityName) => {
        setCityName(newCityName);
    };
    const updateCityCountry = (newCityCountry) => {
        setCityCountry(newCityCountry);
    };
    const updateRegion = (newRegion) => {
        setRegion(newRegion);
    };

    return (
        <div className="bg-slate-50">
            <div
                className="mx-auto max-w-screen-lg py-10 px-32 bg-gradient-to-br from-cyan-800 to-blue-600 h-fit shadow-xl shadow-gray-400">
                <img src="/logo.svg" alt="Logo" className="flex justify-center w-auto"/>
                <TopButtons
                    updateLatitude={updateLatitude}
                    updateLongitude={updateLongitude}
                    updateCityName={updateCityName}
                    updateCityCountry={updateCityCountry}
                    updateRegion={updateRegion}
                />
                <Inputs
                    updateLatitude={updateLatitude}
                    updateLongitude={updateLongitude}
                    updateCityName={updateCityName}
                    updateCityCountry={updateCityCountry}
                    updateRegion={updateRegion}
                    updateTimezone={updateTimezone}
                />
                <TimeAndLocation
                    cityName={cityName}
                    cityCountry={cityCountry}
                    region={region}
                />
                <TemperatureAndDetails/>
                <ForecastHourly
                    title="Час"
                    latitude={latitude}
                    longitude={longitude}
                />
                <ForecastDaily
                    title="День"
                    latitude={latitude}
                    longitude={longitude}
                    timezone={timezone}
                />
                <Footer/>
            </div>
        </div>

    );
}

export default App;
