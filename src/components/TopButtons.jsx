function TopButtons() {
    const cities = [
        {
            id: 1,
            title: 'Новокузнецк'
        },
        {
            id: 2,
            title: 'Москва'
        },
        {
            id: 3,
            title: 'Лондон'
        },
        {
            id: 4,
            title: 'Нью-Йорк'
        },
        {
            id: 5,
            title: 'Токио'
        },
    ]
    return (
        <div className="flex items-center justify-around my-6">
            {cities.map((city)=>(
                <button key={city.id} className="text-white text-lg font-medium">
                    {city.title}
                </button>
            ))}
        </div>
    )
}

export default TopButtons;
