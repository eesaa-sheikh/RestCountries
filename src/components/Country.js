
const Country =({country}) =>{
    return (
        <div className="allCountry">
        <h2 key = "uniqueId">{country.name.official},{country.flag},{country.population}</h2>
        <button className="visitedCountry">I Visited this Country</button>
        </div>
    )

}

export default Country;