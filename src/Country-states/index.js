import { useState } from "react";

const countries = [
    {
        name: 'India',
        value: 'IN',
        cities: ['Delhi', 'Mumbai']
    },
    {
        name: 'Pak',
        value: 'PK',
        cities: ['Lahore', 'Karachi']
    },
    {
        name: 'Bangladesh',
        value: 'BG',
        cities: ['Dhaka', 'Chittagong']
    }
];

console.log(countries);

const NestedWayDropdown = () => {
    const [country, setCountry] = useState('')
    const [cities, setCities] = useState([])
    const SelectCountry = (e) => {
        // console.log('e', e.target.value)
        setCountry(e.target.value);
        countries.map((values) => {
            if (values.value == e.target.value) {
                console.log('values', values?.cities);
                setCities(values?.cities);
            }
        })
    }
    console.log('cities',cities)
    return (
        <>
            <h1>Horizontal</h1>
            <select onChange={SelectCountry}>
                {countries.map((item, index) => {
                    return <option key={index} value={item.value}>{item.name}</option>
                })}
            </select>

            <select >
                {cities.map((city, index) => (
                    <option key={index} value={city}>
                        {city}
                    </option>
                ))}
            </select>
        </>
    )
}
export default NestedWayDropdown;