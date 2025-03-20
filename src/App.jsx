import React, { useState, useEffect, useCallback  } from 'react';
import CatFact from './components/catFact/catFact';
import CatImage from './components/catImage/catImage';
import Loader from './components/loader/loader';
import './App.css';

const App = () => {
  const [fact, setFact] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCatFact = async () => {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    return data.fact;
  };

  const fetchCatImage = async (text) => {
    const encodedText = encodeURIComponent(text); // Codificar el texto
    const url = `https://cataas.com/cat/says/${encodedText}`;
    console.log('Image URL:', url); // Verifica la URL de la imagen
    return url;
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const fact = await fetchCatFact();
      const firstFourWords = fact.split(' ').slice(0, 4).join(' ');
      const imageUrl = await fetchCatImage(firstFourWords);
      setFact(fact);
      setImageUrl(imageUrl);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="app">
      <h1>Random Cat Facts</h1>
      {loading ? (
        <Loader />
      ) : (
        <>
          <CatFact fact={fact} />
          <CatImage imageUrl={imageUrl} />
          <button onClick={fetchData}>Get New Fact</button>
        </>
      )}
    </div>
  );
};

export default App;