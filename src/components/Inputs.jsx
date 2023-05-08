import {UilSearch} from '@iconscout/react-unicons'
import axios from "axios";
import {useState} from "react";


function Inputs({updateLatitude, updateLongitude, updateTimezone, updateCityName, updateCityCountry, updateRegion}) {

    const [location, setLocation] = useState("");

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get(
            `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
        );
        const {data} = response;
        updateLatitude(data.results[0].latitude);
        updateLongitude(data.results[0].longitude);
        updateTimezone(data.results[0].timezone)
        updateCityName(data.results[0].name);
        updateCityCountry(data.results[0].country);
        updateRegion(data.results[0].admin1);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSubmit(event);
        }
    };

    return (
        <div className="flex flex-row justify-center my-6">
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input type="text"
                       className="text-xl font-light p-2 w-full shadeow-xl focus:outline-none capitalize"
                       placeholder="Поиск"
                       onChange={handleLocationChange}
                       onKeyDown={handleKeyDown}
                       ref={(input) => input && input.focus()} // сделайте фокус на поле ввода по умолчанию
                />
                <UilSearch size={25} onClick={handleSubmit}
                           className="text-white cursor-pointer transition ease-out hover:scale-125"
                />
            </div>
        </div>
    )
}

export default Inputs;
