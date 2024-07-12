import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Favourites() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('/favourites')
      .then(response => {
        setData(response.data.message);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>React and Node.js Integration</h1>
      <p>Message from the server: {data}</p>
    </div>
  );
}

export default Favourites;  