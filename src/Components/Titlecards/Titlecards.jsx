import React, { useEffect, useRef, useState } from 'react'
import './Titlecards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router'


 

const Titlecards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTQ2ZGQzZTJlMzA3ZDA0YjBmMzcyYjE5MTY2NjVlNiIsIm5iZiI6MTczNDI1ODA2Ny4zNDcwMDAxLCJzdWIiOiI2NzVlYWQ5MzU1MWY2OWY3N2NhZGRjYWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NxdaIe2iTKwuqoAaskvo2F-wjXZL2q5m3ENlobboOTQ'
    }
  };
  
  
  
  

  const scrollWheel = (event) => {
    event.preventDefault();

    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', scrollWheel);
  },[]);

  return (
    <div className='title-cards'>
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="cards" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
            <p className='show-name'>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default Titlecards