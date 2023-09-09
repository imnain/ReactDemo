import React, { useState, useEffect } from 'react';

const BackendDataComponent = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    // Fetch data from the Spring Boot backend
    fetch('http://localhost:8080/data') // Replace with your backend API URL
      .then(response => response.text())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Data from Spring Boot Backend</h1>
      <p>{data}</p>
    </div>
  );
};

export default BackendDataComponent;
