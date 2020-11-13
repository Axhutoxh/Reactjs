import { data } from 'autoprefixer';
import Axios from 'axios';
import React, { useState,useEffect } from 'react'

const url = process.env.REACT_APP_UNSPLASH_URL
const api_key =  process.env.REACT_APP_UNSPLASH_KEY


export default function useFetchImage(page) {
    const [images, setImages] = useState([])

    useEffect(() => {
        Axios.get(
            `${url}?client_id=${api_key}&page=${page}`
            ).then((res)=> {
            setImages([...images,...res.data]);
          });
    }, [page])

      return [images,setImages];
}
