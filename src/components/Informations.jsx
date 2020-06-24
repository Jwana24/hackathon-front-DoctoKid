import React, {useState, useEffect} from 'react';
import Axios from 'axios';

import './Informations';

const Informations = () => {
  const [ deseases, setDeseases ] = useState([]);

  useEffect(() => {
    Axios({
      method: 'GET',
      url: 'http://localhost:3000/api/deseases', // `http://localhost:3000/api/deseases?name=${name}`
      data: deseases
    })
    .then(res => res.data)
    .then(data => setDeseases(data))
  }, []);

  return(
    <div className="Info">
      <h1>Deseases informations</h1>
      <ul>
          {deseases.map((desease, id) => (
            <div key={id}>
              <li><h2>{desease.name}</h2></li>
              <iframe type="text/html" width="800px" height="500px" src={desease.video} />
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Informations;