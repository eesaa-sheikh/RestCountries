import { render } from '@testing-library/react';
import {useState, useEffect} from 'react';
import Country from '../components/Country';



const CountryContainers =() =>{

    const[countries,setCountries] = useState([ ]);

    //§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§
    

    //§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

    useEffect(() =>{

        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data=> setCountries(data))

    }, [ ])


    const[visitedTheCountries,setVisitedTheCountries] = useState([ ]);

    const movetoVisited = (country) =>{
        setVisitedTheCountries([...visitedTheCountries,country])
    }

const countryComponents = countries.map((country)=>{
        return <Country country ={country} movetoVisited={movetoVisited}/>
    })

    const vistedCountryComp = visitedTheCountries.map((country) =>{
   
    return(
        <>
        {console.log("country visited")};
        <Country country={country} movetoVisited = {movetoVisited}></Country>
        </>
        
    )

    })  

    return(
       countries.length > 0 ? countryComponents : <p>Loading Country</p>

    )


};








export default CountryContainers;

