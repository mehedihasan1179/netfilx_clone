import React, { useEffect, useState } from 'react'
import './Player.css'
import back_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    type: '',
    published_at: '',
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTQ2ZGQzZTJlMzA3ZDA0YjBmMzcyYjE5MTY2NjVlNiIsIm5iZiI6MTczNDI1ODA2Ny4zNDcwMDAxLCJzdWIiOiI2NzVlYWQ5MzU1MWY2OWY3N2NhZGRjYWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NxdaIe2iTKwuqoAaskvo2F-wjXZL2q5m3ENlobboOTQ'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[]);
  
  

  return (
    <div className='player'>
      <img src={back_icon} alt="" className='back-icon' onClick={() => navigate(-2)}/>
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} frameBorder="0" allowFullScreen></iframe>
      <div className="display-info">
        <div>{apiData.published_at.slice(0,10)}</div>
        <div>{apiData.name.slice(0,16)}</div>
        <div>{apiData.type.slice(0,9)}</div>  
      </div>      
    </div>
  )
}

export default Player