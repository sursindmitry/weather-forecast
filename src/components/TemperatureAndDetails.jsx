import {
    UilClouds,
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilSun,
    UilSunset
} from '@iconscout/react-unicons'
import {useEffect, useState} from "react";
import axios from "axios";

function TemperatureAndDetails({latitude, longitude, timezone}) {

    const [temperatureMax, setTemperatureMax] = useState(null);
    const [apparentTemperatureMax, setApparentTemperatureMax] = useState(null);
    const [apparentTemperatureMin, setApparentTemperatureMin] = useState(null);
    const [sunrise, setSunrise] = useState(null);
    const [sunset, setSunset] = useState(null);

    const sunriseSun = new Date(sunrise);
    const hoursSunrise = sunriseSun.getHours();
    const minuteSunrise = sunriseSun.getMinutes();

    const sunsetSun = new Date(sunset);
    const hoursSunset = sunsetSun.getHours();
    const minuteSunset = sunsetSun.getMinutes();


    useEffect(() => {
        async function fetchData() {
            const responseTemperatureMax = await axios.get(`https://api.open-meteo.com/v1/dwd-icon?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=temperature_2m_max`);
            const responseApparentTemperatureMax = await axios.get(`https://api.open-meteo.com/v1/dwd-icon?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=apparent_temperature_max`);
            const responseApparentTemperatureMin = await axios.get(`https://api.open-meteo.com/v1/dwd-icon?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=apparent_temperature_min`);
            const sunrise = await axios.get(`https://api.open-meteo.com/v1/dwd-icon?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=sunrise`);
            const sunset = await axios.get(`https://api.open-meteo.com/v1/dwd-icon?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=sunset`);
            setTemperatureMax(responseTemperatureMax.data.daily);
            setApparentTemperatureMax(responseApparentTemperatureMax.data.daily);
            setApparentTemperatureMin(responseApparentTemperatureMin.data.daily);
            setSunrise(sunrise.data.daily.sunrise[0])
            setSunset(sunset.data.daily.sunset[0])
        }

        fetchData();
    }, [latitude]);

    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>Облачно</p>
            </div>

            <div className="flex flex-row items-center justify-between text-white py-3">
                <UilClouds size={70}/>
                {temperatureMax ? temperatureMax.time.slice(0, 1).map((index) => (
                    <p className="text-5xl" key={index}>{temperatureMax.temperature_2m_max[0]}°</p>
                )) : <p className="text-5xl">Загрузка...</p>}


                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={18} className="mr-1"/>
                        Ощущается:
                        {apparentTemperatureMax ? apparentTemperatureMax.time.slice(0, 1).map((index) => (
                            <span className="font-medium ml-1"
                                  key={index}>{apparentTemperatureMax.apparent_temperature_max[0]}°</span>
                        )) : <span className="font-medium ml-1">Загрузка...</span>}
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
                <UilSun/>
                <p className="font-light">Восход: <span
                    className="font-medium ml-1">{hoursSunrise}:{minuteSunrise}</span></p>
                <p className="font-light">|</p>
                <UilSunset/>
                <p className="font-light">Закат: <span className="font-medium ml-1">{hoursSunset}:{minuteSunset}</span>
                </p>
                <p className="font-light">|</p>
                <UilArrowUp/>

                {apparentTemperatureMax ? apparentTemperatureMax.time.slice(0, 1).map((index) => (
                    <p className="font-light" key={index}>Макс: <span
                        className="font-medium ml-1">{apparentTemperatureMax.apparent_temperature_max[0]}°</span></p>
                )) : <span className="font-medium ml-1">Загрузка...</span>}
                <p className="font-light">|</p>
                <UilArrowDown/>
                {apparentTemperatureMin ? apparentTemperatureMin.time.slice(0, 1).map((index) => (
                    <p className="font-light" key={index}>Мин: <span
                        className="font-medium ml-1">{apparentTemperatureMin.apparent_temperature_min[0]}°</span></p>
                )) : <span className="font-medium ml-1">Загрузка...</span>}
            </div>

        </div>
    )
}

export default TemperatureAndDetails;