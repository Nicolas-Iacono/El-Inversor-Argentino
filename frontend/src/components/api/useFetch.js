import axios from 'axios'
import { useEffect, useState } from 'react'
import { Code } from './constants'
export const useGetFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url
          , {
          method: "GET",
          headers:{
              "Content-Type": "application/json",
          },
          // credentials:"include",
        }
      );
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
};

export const postFetch = (endpoint, payload) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .post(endpoint,payload)
      .then((res) => resolve(res.data))
      .catch((error) => reject(error))
  })
  return promise
}

export const putFetch = (endpoint, id) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .put(endpoint, id)
      .then((res) => resolve(res.data))
      .catch((error) => reject(error))
  })

  return promise
}

export const deleteFetch = (endpoint, id) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .delete(endpoint, { data: id })
      .then((res) => resolve(res.data))
      .catch((error) => reject(error))
  })

  return promise
}
