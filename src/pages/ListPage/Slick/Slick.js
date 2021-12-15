import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SimpleSlider({ insideBox }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '20px',
  };
  return (
    <div>
      <StyledSlider {...settings}>
        {insideBox.images.map(({ id, image_url }) => (
          <div key={id}>
            <Images src={image_url} alt={id} />
          </div>
        ))}
      </StyledSlider>
    </div>
  );
}

export const StyledSlider = styled(Slider)`
  .slick-list {
    width: 300px;
    height: 200px;
    margin: 0 auto;
    overflow-x: hidden;
    background: #ddd;
    border-radius: 10px;
  }

  .slick-slide div {
    cursor: pointer;
  }

  .slick-dots {
    display: flex;
    align-items: center;
    bottom: 10px;
    color: white;
  }

  .slick-track {
    width: 300px;
  }

  .slick-arrow {
    width: 10px;
  }

  .slick-prev,
  .slick-next {
    z-index: 2;
    opacity: 0;
    transition: 0.2s all;
    &:hover {
      opacity: 1;
    }
  }

  .slick-prev {
    font-size: 40px;
    margin-left: 40px;
  }

  .slick-next {
    margin-right: 60px;
  }

  .slick-prev:before {
    background-image: url('images/ListPage/prevArrow.png');
    background-size: 30px 30px;
    display: inline-block;
    width: 30px;
    height: 30px;
    content: '';
  }
  .slick-next:before {
    background-image: url('images/ListPage/nextArrow.png');
    background-size: 30px 30px;
    display: inline-block;
    width: 30px;
    height: 30px;
    content: '';
    margin-right: 10px;
  }

  .slick-dots li {
    margin: -3px;
  }

  .slick-dots li button:before {
    color: white;
    width: 3px;
  }
`;

const Images = styled.img`
  width: 300px;
  object-fit: cover;
`;

export default SimpleSlider;
