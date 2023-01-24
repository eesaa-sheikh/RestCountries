
const Country =({country, movetoVisited}) =>{

    //§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§
    function handleChange (event){
        event.preventDefault();
        movetoVisited(country);
    }
    //§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

    return (
        <div className="allCountry">
        
        <h3 key = "uniqueId">{country.name.official},
        {country.flag},
        {country.population}, {country.region}</h3>
        <input type="checkbox" onChange={handleChange}/>
        </div>
    )

}

export default Country;