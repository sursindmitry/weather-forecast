import {
    UilClouds,
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset
} from '@iconscout/react-unicons'

function TemperatureAndDetails() {
    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>Облачно</p>
            </div>

            <div className="flex flex-row items-center justify-between text-white py-3">
                <UilClouds size={70}/>
                <p className="text-5xl">34°</p>
                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={18} className="mr-1"/>
                        Ощущается:
                        <span className="font-medium ml-1">32°</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTear size={18} className="mr-1"/>
                        Влажность:
                        <span className="font-medium ml-1">65%</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilWind size={18} className="mr-1"/>
                        Ветер:
                        <span className="font-medium ml-1">11 км/ч</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
                <UilSun/>
                <p className="font-light">Восход: <span className="font-medium ml-1">06:54</span></p>
                <p className="font-light">|</p>
                <UilSunset/>
                <p className="font-light">Закат: <span className="font-medium ml-1">18:54</span></p>
                <p className="font-light">|</p>
                <UilArrowUp/>
                <p className="font-light">Макс: <span className="font-medium ml-1">45°</span></p>
                <p className="font-light">|</p>
                <UilArrowDown/>
                <p className="font-light">Мин: <span className="font-medium ml-1">20°</span></p>
            </div>

        </div>
    )
}

export default TemperatureAndDetails;