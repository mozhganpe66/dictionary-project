import React, {useState} from 'react';
import Results from './Results'
import './Dictionary.css'
import axios from 'axios';
 export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false)

     function handelResponse(response){
            setResults(response.data[0])
     }
     
      function search(){
        
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiUrl).then(handelResponse);
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
        </div>
    )
    } else {
      load()
    }
    
 }