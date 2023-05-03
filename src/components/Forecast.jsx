import {UilClouds} from "@iconscout/react-unicons";

function Forecast({title}) {
    return (
        <div>
            <div className="flex items-center justify-start mt-6">
                <p className="text-white font-medium uppercase">{title}</p>
            </div>
            <hr className="my-2"/>

            <div className="flex flex-row items-center justify-between text-white">
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        04:30
                    </p>
                    <UilClouds className="my-1" size={35}/>
                    <p className="font-medium">22°</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        04:30
                    </p>
                    <UilClouds className="my-1" size={35}/>
                    <p className="font-medium">22°</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        04:30
                    </p>
                    <UilClouds className="my-1" size={35}/>
                    <p className="font-medium">22°</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        04:30
                    </p>
                    <UilClouds className="my-1" size={35}/>
                    <p className="font-medium">22°</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        04:30
                    </p>
                    <UilClouds className="my-1" size={35}/>
                    <p className="font-medium">22°</p>
                </div>
            </div>

        </div>
    )
}

export default Forecast;