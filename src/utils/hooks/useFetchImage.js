import { data } from 'autoprefixer';
import Axios from 'axios';
import React, { useState,useEffect } from 'react'

const api = process.env.REACT_APP_UNSPLASH_API
const api_key =  process.env.REACT_APP_UNSPLASH_KEY


export default function useFetchImage(page, searchTerm) {
    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function fetch(){
      const url = searchTerm == null ? 'photos?':`search/photos?query=${searchTerm}&`;
      Axios.get(
        `${api}/${url}client_id=${api_key}&page=${page}`
        )
        .then((res)=> {
          searchTerm == null
          ?  fetchRandom(res)
          :  fetchSearch(res);
          
     
        setIsLoading(false);
      }).catch((e)=> {
          setErrors(["Unable to load gallary "]);
          setIsLoading(false);
        });
    }

    function fetchSearch(res) {
      page > 1 
       ? setImages([...images,...res.data.results])
       : setImages([...res.data.results]);
      
    }
    
    function fetchRandom(res){

      setImages([...images,...res.data]);

    }


    useEffect(() => {
        setIsLoading(true);
        fetch();
    }, [page])

    useEffect(() => {
      if(searchTerm == null) return;
      setIsLoading(true);
      fetch();

    }, [searchTerm]);

      return [images,setImages,errors,isLoading];
}
