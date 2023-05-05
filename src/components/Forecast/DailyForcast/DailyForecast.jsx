import {UilClouds} from "@iconscout/react-unicons";

function DailyForecast({date, temperature}) {
    return (
        <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">
                {date}
            </p>
            <UilClouds className="my-1" size={35}/>
            <p className="font-medium">{temperature}°</p>
        </div>
    )
}

export default DailyForecast;