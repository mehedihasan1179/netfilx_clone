import React, { useRef, useState } from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import heroBg from "../../assets/hero_banner.jpg";
import heroTitle from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import Titlecards from "../../Components/Titlecards/Titlecards";
import Footer from "../../Components/Footer/Footer";

const Home = () => {

    // State for toggle
    const [isToggled, setIsToggled] = useState(false);
  
    // Toggle function
    const handleToggle = () => {
      setIsToggled(!isToggled);
    };


  return (
    <div>
      <Navbar />
     
      <div className="hero">

      {isToggled && (<iframe className="trailer" src={"https://www.youtube.com/embed/80dqOwAOhbo"} frameborder="0" allowFullScreen></iframe>)}

        <img src={heroBg} alt="" className="hero-bg" />
        <div className="hero-caption">
          <img src={heroTitle} alt="" className="hero-title" />
          <p className="caption-info">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy
          </p>

          <div className="hero-btns" onClick={handleToggle}>
            <button className="btn" onClick={handleToggle}>
              <img src={play_icon} alt="" />
              
              Play
            </button>
            <button className="btn info-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <div className="cards-holder">
            <Titlecards />
          </div>
        </div>
      </div>

      <div className="more-cards">
        <Titlecards title={"Blockbuster Movies"} category={"popular"} />
        <Titlecards title={"Top rated"} category={"top_rated"} />
        <Titlecards title={"Upcoming"} category={"upcoming"} />
        <Titlecards title={"Top pics for you"} category={"now_playing"} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
