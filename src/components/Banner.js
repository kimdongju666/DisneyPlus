import axios from '../api/axios'
import React, { useEffect } from 'react'
import requests from '../api/request'

const Banner = () => {



  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async() => {
    //여러 영화 정보 가져오기
    const response = await axios.get(requests.fetchNowPlaying);
    console.log(response);
  }
  


  return (
    <div>Banner</div>
  )
}

export default Banner