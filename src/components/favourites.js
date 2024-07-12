import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Favourites() {
  const [data, setData] = useState('');
  
  const makeAPICall = async () => {
    try {
      const response = await fetch('https://testback-ji4g.onrender.com/favourites', {mode:'cors'});
      const data = await response.json();
      setData(data);
      console.log({ data })
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
   makeAPICall();
  }, []);

  return (
    <div className="App">
      <h1>React and Node.js Integration</h1>
      <p>Message from the server: {data}</p>
    </div>
  );
}

export default Favourites;  