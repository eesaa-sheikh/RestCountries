import {useState, useEffect} from 'react';
import Country from '../components/Country';


const CountryContainers =() =>{

    const[countries,setCountries] = useState([]);

    useEffect(() =>{

        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data=> setCountries(data))

    }, [ ])

    const countryComponents = countries.map((country)=>{
        return <Country country ={country}/>
    })

    return(
       countries.length > 0 ? countryComponents : <p>Loading Country</p>

    )
};
export default CountryContainers;