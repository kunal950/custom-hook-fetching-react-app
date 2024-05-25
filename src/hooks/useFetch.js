import React from 'react'

const useFetch = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const[photos, setPhotos] = useState([]);

    const getPhotos = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=100');
            const data = await response.json();
            setPhotos(data);
        }
        catch (error) {
            setError(error);
        }
        finally {
            setLoading(false);
        }
    }

    const getpost = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setData(data);
        }
        catch (error) {
            setError(error);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getPhotos();
        getpost();        
    }, []);

    return {loading, error, data, photos};
}

export default useFetch
