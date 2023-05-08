function TopButtons({updateLatitude, updateLongitude, updateCityName, updateCityCountry, updateRegion}) {
    const cities = [
        {
            id: 1,
            title: 'Novokuznetsk',
            longitude: 87.1099,
            latitude: 53.7557,
            cityCounty: 'Russia',
            region: 'Kemerovo Oblast'
        },
        {
            id: 2,
            title: 'Moscow',
            longitude: 37.61556,
            latitude: 55.75222,
            cityCounty: 'Russia',
            region: 'Moscow'
        },
        {
            id: 3,
            title: 'London',
            longitude: -0.12574,
            latitude: 51.50853,
            cityCounty: 'United Kingdom',
            region: 'England'
        },
        {
            id: 4,
            title: 'New York',
            longitude: -74.00597,
            latitude: 40.71427,
            cityCounty: 'United States',
            region: 'New York'
        }
    ]

    const handleButtonClick = (city) => {
        updateCityName(city.title);
        updateLongitude(city.longitude);
        updateLatitude(city.latitude);
        updateCityCountry(city.cityCounty);
        updateRegion(city.region);
    };

    return (
        <div className="flex items-center justify-around my-6">
            {cities.map((city)=>(
                <button key={city.id} className="text-white text-lg font-medium" onClick={() => handleButtonClick(city)}>
                    {city.title}
                </button>
            ))}
        </div>
    )
}

export default TopButtons;
