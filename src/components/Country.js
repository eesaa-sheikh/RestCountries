
const Country =({country}) =>{
    return (
        <div className="allCountry">
        <h3 key = "uniqueId">{country.name.official},{country.flag},{country.population}</h3>
        <button className="visitedCountry">I Visited this Country</button>
        </div>
    )

}

export default Country;