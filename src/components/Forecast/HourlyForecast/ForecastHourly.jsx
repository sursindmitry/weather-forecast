import axios from "axios";
import {useEffect, useState} from "react";
import HourlyForecast from "./HourlyForecast";

function ForecastHourly({title, latitude, longitude}) {

    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`);
            setData(response.data.hourly);
        }

        fetchData();
    }, [latitude]);

    return (
        <div>
            <div className="flex items-center justify-start mt-6">
                <p className="text-white font-medium uppercase">{title}</p>
            </div>
            <hr className="my-2"/>

            <div className="flex flex-row items-center justify-between text-white">
                {data ? data.time.slice(6, 12).map((date, index) => (
                    <HourlyForecast key={index} date={date} temperature={data.temperature_2m[index]}/>
                )) : <p>Загрузка...</p>}
            </div>


        </div>
    )
}

export default ForecastHourly;