import {useState, useEffect} from 'react';
import Country from '../components/Country';


const CountryContainers =() =>{

    const[countries,setCountries] = useState([]);

    //§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§
    

    //§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

    const[visitedTheCountries,setVisitedTheCountries] = useState([]);







    useEffect(() =>{

        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data=> setCountries(data))

    }, [ ])


    // const visitingCountry = (Country) => {

    //     setVisitedTheCountries([...visitedTheCountries,Country]);
    //     let filtered = country.filter((countries) =>country.name)

    //   };














    const countryComponents = countries.map((country)=>{
        return <Country country ={country}/>
    })

    return(
       countries.length > 0 ? countryComponents : <p>Loading Country</p>

    )
};
export default CountryContainers;


// if button is clicked
// countriy is moved from the arraylist
// to the new array
// header should say visited countries 