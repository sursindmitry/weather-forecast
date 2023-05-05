import {UilClouds} from "@iconscout/react-unicons";

function HourlyForecast({date, temperature}) {
    const dates = new Date(date);
    const hours = dates.getHours();

    return (
        <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">
                {hours}:00
            </p>
            <UilClouds className="my-1" size={35}/>
            <p className="font-medium">{temperature}°</p>
        </div>
    )
}

export default HourlyForecast;