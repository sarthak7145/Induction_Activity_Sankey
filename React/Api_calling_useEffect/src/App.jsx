import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [loading,setLoading] =useState(false);
  const [error, setError] =useState(null);
  const [apiType,setApiType] = useState(null);

  const getApiUrl = (type) => {
    switch(type)
    {
      case "products" :
        return "https://api.escuelajs.co/api/v1/products";

      case "categories" :
        return "https://api.escuelajs.co/api/v1/categories";

      case "users" :
        return "https://api.escuelajs.co/api/v1/users";

      default :
        return null;
    }
  };

  useEffect(() => {
    if(apiType)
    {
      const fetchData = async() => {
        setLoading(true);
        setError(null);
        const apiUrl = getApiUrl(apiType);
        try{
          const response = await axios.get(apiUrl)
          setData(response.data);
        }
        catch(error)
        {
          setError(error.message);
        }
        finally{
          setLoading(false);
        }
      }
      fetchData();
    }
  },[apiType])

  return (
    <>
    <div>
      <div>
        <button onClick={() => setApiType("products")}>First API</button>
        <button onClick={() => setApiType("categories")}>Second API</button>
        <button onClick={() => setApiType("users")}>Third API</button>    
      </div> 

        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}

        {data && <pre>{JSON.stringify(data,null,2)}</pre>}
    </div>
    </>
  )
}

export default App
