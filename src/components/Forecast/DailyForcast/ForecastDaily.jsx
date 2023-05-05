import axios from "axios";
import {useEffect, useState} from "react";
import DailyForecast from "./DailyForecast";

function ForecastDaily({title, latitude, longitude, timezone}) {

    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://api.open-meteo.com/v1/dwd-icon?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=temperature_2m_max`);
            setData(response.data.daily);
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
                {data ? data.time.slice(0,6).map((date, index) => (
                    <DailyForecast key={index} date={date} temperature={data.temperature_2m_max[index]} />
                )) : <p>Загрузка...</p>}
            </div>


        </div>
    )
}

export default ForecastDaily;