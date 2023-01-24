import {useState, useEffect} from 'react';
import Country from '../components/Country';


const CountryContainers =() =>{

    const[dog,setDog] = useState(null);

    useEffect(() =>{

        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data=> setDog(data.message))

    }, [ ])


    return(
        // what this says is that if dog image is not loading, loading dog picture with show
       dog ? <Dog dog ={dog}/> : <p>Loading dog picture</p>

    )

};

export default DogContainer;