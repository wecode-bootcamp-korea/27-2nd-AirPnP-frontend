import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SlickDetail({ detail }) {
  const settings = {
    dots: true, // 슬라이드 밑에 점 보이게
    infinite: true, // 무한으로 반복
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000, // 넘어가는 속도
    slidesToShow: 1, // 몇장씩 보이게 할건지?
    slidesToScroll: 1, // 1장씩 뒤로 넘어가게
    centerMode: true,
    centerPadding: '0px', // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        {detail.images &&
          detail.images.map(({ id, src, alt }) => {
            return <SliderImg key={id} alt={alt} src={src} />;
          })}
      </StyledSlider>
    </Container>
  );
}
const Container = styled.div`
  margin-right: 25px;
`;

// 슬라이드 CSS
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
