import React, {useState} from 'react';
import Results from './Results';
import Photos from './Photos';
import './Dictionary.css'
import axios from 'axios';
 export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);
    let [loaded, setLoaded] = useState(false)

     function handelDictionaryResponse(response){
            setResults(response.data[0])
     }

     function handlePexelsResponse(response){
      setPhotos(response.data.photos)
     }
     
      function search(){
        
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiUrl).then(handelDictionaryResponse);

        let pexelsApiKey= "MoH0Zwu3dwxq2krHQwThXKOmOAP59fbxY3flDepDIMWOGnftytbvMwBL";
        let pexelsApiUrl= `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: pexelsApiKey}
        axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse)
    } 
     function handleSubmit(event){
        event.preventDefault();
        search();
     }
     function load(){
      setLoaded(true);
      search();
     }
   
    function handleKeywordChange(event){
        setKeyword(event.target.value)
    }
    if(loaded){
       return (
        <div className="Dictionary">
         <section>
          <h1>What word do you want to look up?</h1>
           <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange}
            defaultValue={props.defaultKeyword}/>
          </form>
          <div className="hint">
            suggested words: sunset, wine, yogs, plant...
          </div>
         </section>
         <Results results={results} />
         <Photos photos={photos} />

        </div>
    )
    } else {
      load()
    }
    
 }