import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SlickDetail({ detail }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        {detail.images &&
          detail.images.map(({ id, image_url, alt }) => {
            return <SliderImg key={id} alt={alt} src={image_url} />;
          })}
      </StyledSlider>
    </Container>
  );
}
const Container = styled.div`
  margin-right: 25px;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 700px;
    height: 450px;
    border-radius: 20px;
  }

  .slick-slide div {
    cursor: pointer;
  }

  .slick-dots {
    bottom: -50px;
    margin-top: 200px;
  }
`;
const SliderImg = styled.img`
  width: 300px;
`;

export default SlickDetail;
