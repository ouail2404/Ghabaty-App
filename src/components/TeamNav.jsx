import React from "react";
import Slider from "react-slick";
import Ouail from "../images/team members/O-M.jpg";
import Younes from "../images/team members/Y-S.png";
import Salim from "../images/team members/S-T.png";
import Fati from "../images/team members/F-L.jpg";
import Amine from "../images/team members/M-A.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} bg-red-500 text-white rounded-full flex items-center justify-center`}
      onClick={onClick}
      style={{
        right: "-30px",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        zIndex: 10,
      }}
    >
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} bg-red-500 text-white rounded-full flex items-center justify-center`}
      onClick={onClick}
      style={{
        left: "-30px",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        zIndex: 10,
      }}
    >
      <i className="fas fa-chevron-left"></i>
    </div>
  );
};

const TeamNav = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const teamMembers = [
    { name: "Ouail El Maadi", role: "Scrum Master", img: Ouail },
    { name: "Younes Soulaiman", role: "Developer", img: Younes },
    { name: "Salim Tagemouti", role: "Developer", img: Salim },
    { name: "Fatima Ezzahrae Massdar", role: "Developer", img: Fati },
    { name: "Mohamed Amine Labrahmi", role: "Developer", img: Amine },
  ];

  return (
    <div className="p-16 bg-gray-50 ml-16">
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div
            className="flex flex-col items-center justify-center p-4"
            key={index}
          >
            <div className="rounded-full overflow-hidden w-32 h-32 shadow-lg mb-4 ml-16">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 ml-16">
              {member.name}
            </h3>
            <p className="text-gray-600 ml-16">{member.role}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamNav;
