import React from "react";
import './slider.scss';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.scss';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import banner1 from '../../resources/banners/banner-1.jpg';
import banner2 from '../../resources/banners/banner-2.jpg';
import banner3 from '../../resources/banners/banner-3.jpg';
import withAutoplay from 'react-awesome-slider/dist/autoplay';


const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
    return (

        <div className="header">
            <AutoplaySlider
                animation="fallAnimation"
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={5000}
            >
                <div className="sliderImage" data-src={banner1}>
                    <h3 className="text">Dry fruits can boost the immunity system.</h3>
                </div>
                <div data-src={banner2} />
                <div data-src={banner3} />
            </AutoplaySlider>
            
        </div>
    )
}

export default Slider;

