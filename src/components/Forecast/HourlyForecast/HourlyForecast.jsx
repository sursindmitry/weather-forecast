import {UilClouds} from "@iconscout/react-unicons";

function HourlyForecast({date, temperature}) {
    return (
        <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">
                {new Date(date).getHours()}:00
            </p>
            <UilClouds className="my-1" size={35}/>
            <p className="font-medium">{temperature}°</p>
        </div>
    )
}

export default HourlyForecast;