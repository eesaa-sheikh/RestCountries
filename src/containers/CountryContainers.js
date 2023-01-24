import {useState, useEffect} from 'react';
import Country from '../components/Country';


const CountryContainers =() =>{

    const[countries,setCountries] = useState([]);

    //§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§
    

    //§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

  





    useEffect(() =>{

        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data=> setCountries(data))

    }, [ ])


    const[visitedTheCountries,setVisitedTheCountries] = useState([]);

    const movetoVisited = (country) =>{
        setVisitedTheCountries([...visitedTheCountries,country])
    }


    // const visitingCountry = (Country) => {

    //     setVisitedTheCountries([...visitedTheCountries,Country]);
    //     let filtered = country.filter((countries) =>country.name)

    //   };

// const countryComponents = countries.map((country)=>{
//         return <Country country ={country} movetoVisited={movetoVisited}/>
//     })
//     const vistedCountryComp = visitedTheCountries.map((country) =>{
        
//     return(
//         <>
//         <Country country={countryComponents} />
        
        
        
//         </>
//     )

//     })

//     return(
//        countries.length > 0 ? countryComponents : <p>Loading Country</p>

//     )


// };


return(

    <>
        {
        countries ? countries.map(function(country) { 
            return (                
            <>
            <CountryComponent country={country} moveCountryToVisitedList={moveCountryToVisitedList}/>
            </>)})
            : "No countries found"
        }


        <h2>Visited Countries:</h2>
        {
        visitedCountries ? visitedCountries.map(function(country) { 
            return (                
            <>
            <CountryComponent country={country} moveCountryToVisitedList={() => {console.log("Already added country!")}} />
            </>)})
            : "No countries found"
        }
    </>



)

}








export default CountryContainers;


// if button is clicked
// countriy is moved from the arraylist
// to the new array
// header should say visited countries 








import { useState, useEffect } from "react";
import CountryComponent from "../components/CountryComponent";

const CountryContainer = () => {

    const[countries, setCountries] = useState([]);

    useEffect(() => {

        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => setCountries(data))

    }, [])

    const [visitedCountries, setVisitedCountries] = useState([]);

    const moveCountryToVisitedList = (country) => {
        setVisitedCountries([...visitedCountries, country])
    }
    


    // const countryNames = countries.map((country) => country.name.common);

    // console.log(countryNames);

    console.log(visitedCountries)

    return(

        <>
            {
            countries ? countries.map(function(country) { 
                return (                
                <>
                <CountryComponent country={country} moveCountryToVisitedList={moveCountryToVisitedList}/>
                </>)})
                : "No countries found"
            }
    

            <h2>Visited Countries:</h2>
            {
            visitedCountries ? visitedCountries.map(function(country) { 
                return (                
                <>
                <CountryComponent country={country} moveCountryToVisitedList={() => {console.log("Already added country!")}} />
                </>)})
                : "No countries found"
            }
        </>



    )

}
