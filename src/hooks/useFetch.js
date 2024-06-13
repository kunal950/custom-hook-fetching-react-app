import React from "react";
import { useState, useEffect } from "react";
const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=100"
      );
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return { loading, error, photos };
};

export default useFetch;
