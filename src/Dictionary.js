import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";



export default function Dictionary(props) {
    let [keyword, setKeyword]= useState(props.defaultKeyword);
    let [results, setResults]=useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

 function handleResponse (response) {
     setResults(response.data[0]);
 }

   function handlePexelsResponse (response){
        //console.log (response);
        setPhotos(response.data.photos);
    }

        function search() {
// documentation: https://dictionaryapi.dev
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey= "563492ad6f9170000100000156caaf5233ec4a13869c4d053c0a6287";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = {"Authorization" : `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);
    }

    function handleSubmit (event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) { 
        setKeyword(event.target.value);
    }
   
     function load () {
        setLoaded(true);
        search();
    }

    if(loaded) {

return (
     <div className="Dictionary">
        <section>
            <form onSubmit={handleSubmit}>
                <input 
                type="search" 
                className="inputSearch"
                placeholder="Type a word..."
                onChange={handleKeywordChange}
                defaultValue={props.defaultKeyword} />
            </form>
            <div className="hint">
                suggested words: book, sunset, wine, yoga..
            </div>
            </section>
     <Results results={results}/>
     <Photos photos={photos} />
</div>
        );
} else {
    load ();
    return "Loading..."
}


}