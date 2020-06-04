import React, { Component } from "react";
import Slider from 'react-slick';
import WebCard from './WebCard';

import './Projects.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class WebSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 880,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="slider-bars">
          <div className="sub-projHeader">
              Web & App Development
          </div> 
          <Slider {...settings}>
            <div>
              <WebCard 
                  src={process.env.PUBLIC_URL + "/images/project/bitleighWeb.png"}
                  alt={"BitLeigh Vu's Personal Website"}
                  title={"Personal Website"}
                  link={"https://github.com/bitleighvu/bitleighvu.github.io"}
                  text={"A static personal website for career growth and exposure deployed on GitHub pages."}
                  date={"June 4, 2020"}
              />
            </div>
            <div>
              <WebCard 
                  src={process.env.PUBLIC_URL + "/images/project/scpcWeb.png"}
                  alt={"SCPC Event Management"}
                  title={"SCPC Event Management"}
                  text={"A React framework application to manage Georgia Tech’s student-led event planning organization. The application manages an event calendar, resources, directory, and checklist requirements for active membership for 100+ members."}
                  date={"May 20, 2020"}
              />
            </div>
            <div>
            <WebCard 
                src={process.env.PUBLIC_URL + "/images/project/hemaWeb.png"}
                alt={"HEMA Membership Checker"}
                title={"HEMA Membership Checker"}
                link={"https://github.com/bitleighvu/HEMAMembershipTracker"}
                text={"A membership checker to allow Historical European Martial Arts users to check their membership status utilizing TidyHQ’s API."}
                date={"May 2, 2020"}
            />
            </div>
            <div>
            <WebCard 
                src={process.env.PUBLIC_URL + "/images/project/centsible.png"}
                alt={"Centsible"}
                title={"Centsible"}
                link={"https://github.com/bitleighvu/Centsible"}
                text={"An internal resource planning Android and web application to efficiently track and categorize donations to non-profit organizations and utilize distribution metrics to further optimize services utilizing Firebase and Google Maps."}
                date={"Devember 3, 2018"}
            />
            </div>
        </Slider>
      </div>
    );
  }
}