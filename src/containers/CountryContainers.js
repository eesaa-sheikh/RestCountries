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


    // const[visitedTheCountries,setVisitedTheCountries] = useState([]);

    // const movetoVisited = (country) =>{
    //     setVisitedTheCountries([...visitedTheCountries,country])
    // }


    const visitingCountry = (Country) => {

        setVisitedTheCountries([...visitedTheCountries,Country]);
        let filtered = country.filter((countries) =>country.name)

      };

const countryComponents = countries.map((country)=>{
        return <Country country ={country} movetoVisited={movetoVisited}/>
    })
    const vistedCountryComp = visitedTheCountries.map((country) =>{
        
    return(
        <>
        <Country country={countryComponents} />
        
        
        
        </>
    )

    })

    return(
       countries.length > 0 ? countryComponents : <p>Loading Country</p>

    )


};


// return(

//     <>
//         {
//         countries ? countries.map(function(country) { 
//             return (                
//             <>
//             <Country country={country} movetoVisited={movetoVisited}/>
//             </>)})
//             : "No countries found"
//         }


//         <h2>Visited Countries:</h2>
//         {
//         visitedTheCountries ? visitedTheCountries.map(function(country) { 
//             return (                
//             <>
//             <Country country={country} visitedCountries={() => {console.log("Already added country!")}} />
//             </>)})
//             : "No countries found"
//         }
//     </>



// )

// }








export default CountryContainers;

