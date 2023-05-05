import {useEffect, useState} from "react";

function TimeAndLocation({cityName, cityCountry, region}) {
    const [time, setTime] = useState(null);
    const [date, setDate] = useState();
    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const localTime = date.toLocaleTimeString();
            const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
            const formattedDate = date.toLocaleDateString('ru-RU', options);
            setTime(localTime);
            setDate(formattedDate);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="flex items-center justify-center my-6">
                <p className="text-white text-xl font-medium uppercase">
                    {date} | Локальное время: {time}
                </p>
            </div>
            <div className="flex items-center justify-center my-3">
                <p className="text-white text-3xl font-medium">
                    {cityName}, {region} ,{cityCountry}
                </p>
            </div>
        </div>
    )
}

export default TimeAndLocation;