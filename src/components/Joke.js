import React, { useState } from 'react';
import axios from 'axios';

function Joke() {

    const[joke,setJoke]=useState("");


    const getJoke = () => {

        // const data = axios.get("https://official-joke-api.appspot.com/random_joke");
        // setJoke(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        axios.get("https://official-joke-api.appspot.com/random_joke").then((response) => 
        {console.log(response)
            setJoke(response.data.setup +"......"+ response.data.punchline)    
          });
        }


    
      
    return (
      <div className="App">
      <section>
        <button onClick={getJoke}>Tell me a joke</button>
        <div className='Joke'>
        {joke}
        </div>
        </section>
      </div>
       );
      
}

export default Joke