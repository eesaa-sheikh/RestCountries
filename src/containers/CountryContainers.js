import {useState, useEffect} from 'react';
import Country from '../components/Country';


const CountryContainers =() =>{

    const[country,setCountry] = useState(null);

    useEffect(() =>{

        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data=> setCountry(data.name))

    }, [ ])


    return(
        // what this says is that if dog image is not loading, loading dog picture with show
       country ? <Country country ={country}/> : <p>Loading Country picture</p>

    )

};

export default CountryContainers;