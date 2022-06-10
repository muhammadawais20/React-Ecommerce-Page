import React from "react";
import Cards from "../../components/Cards/Cards";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import './home.scss';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Navbar />
            <Slider />
            <Cards />
        </div>
    )
}

export default Home;