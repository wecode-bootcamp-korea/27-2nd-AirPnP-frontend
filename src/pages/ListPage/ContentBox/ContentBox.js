import React from 'react';
import styled from 'styled-components';
import Slick from '../Slick/Slick';
import LikeHeart from '../LikeHeart/LikeHeart';
import { BsStarFill } from 'react-icons/bs';

function ContentBox({ contentBoxArea, offset, limit }) {
  return (
    <ContentInsideBox>
      {contentBoxArea.slice(offset, offset + limit).map(insideBox => {
        const { host_id, category, images, name, description, price, amount } =
          insideBox;

        return (
          <SlickAndContent key={host_id}>
            <TopLine />
            <InsideContentBox>
              <Slick />
              <ContentRightBox>
                <ContentHeaderBox>
                  <TitleBox>
                    <JobTitle>{category}</JobTitle>
                    <Title>{name}</Title>
                  </TitleBox>
                  <LikeIcon>
                    <LikeHeart />
                  </LikeIcon>
                </ContentHeaderBox>
                <HorizonLine />
                <Introduce>{description}</Introduce>
                <ContentBottomBox>
                  <ReviewBox>
                    <BsStarFill className="star" />
                    <Number>4.55</Number>
                    <Review> (후기 11개)</Review>
                  </ReviewBox>
                  <PriceBox>
                    <PriceAndDay>
                      <Price>₩{price} </Price>
                      <Day>/ 일</Day>
                    </PriceAndDay>
                    <AmountBox>
                      <TextAndPrice>총액 ₩{amount}</TextAndPrice>
                    </AmountBox>
                  </PriceBox>
                </ContentBottomBox>
              </ContentRightBox>
            </InsideContentBox>
          </SlickAndContent>
        );
      })}
    </ContentInsideBox>
  );
}

const ContentInsideBox = styled.div`
  width: 100%;
  padding: 0 8px 12px 8px;
`;

const SlickAndContent = styled.div`
  display: grid;
  grid-template-columns: 100%;
  isolation: isolate;
`;

const TopLine = styled.div`
  width: 780px;
  margin: 0 auto;
  border-top: 1px solid ${({ theme }) => theme.lightGray}; ;
`;

const InsideContentBox = styled.div`
  display: flex;
  padding: 20px;
`;

const ContentRightBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 200px;
  margin-left: 16px;
`;
const ContentHeaderBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const JobTitle = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.darkGray};
`;

const Title = styled.span`
  font-size: 24px;
  line-height: 40px;
`;

const LikeIcon = styled.button`
  appearance: none;
  display: inline-block;
  border-radius: 50%;
  border: none;
  outline: none;
  margin: 0px;
  padding: 0px;
  color: ${({ theme }) => theme.black};
  cursor: pointer;
  position: relative;
  background: transparent;
  transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s,
    transform 0.25s ease 0s;

  .heart {
    width: 30px;
    height: 30px;
  }
`;

const HorizonLine = styled.div`
  border-top: 1px solid ${({ theme }) => theme.lightGray};
  width: 32px;
`;

const Introduce = styled.span`
  width: 380px;
  font-size: 16px;
  color: ${({ theme }) => theme.darkGray};
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  font-weight: ${({ theme }) => theme.thin};
  margin-top: 10px;
`;

const ContentBottomBox = styled.div`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  justify-content: space-between;
`;

const ReviewBox = styled.div`
  font-size: 16px;
  .star {
    fill: red;
  }
`;

const Number = styled.span`
  margin-left: 5px;
  font-weight: 700;
`;

const Review = styled.span`
  word-spacing: -3px;
  color: ${({ theme }) => theme.darkGray};
`;

const PriceBox = styled.div`
  text-align: end;
`;

const PriceAndDay = styled.div`
  line-height: 20px;
`;

const Price = styled.span`
  font-size: 18px;
  font-weight: 900;
`;

const Day = styled.span`
  font-size: 20px;
`;

const AmountBox = styled.button`
  appearance: none;
  background: transparent;
  border: 0px;
  cursor: pointer;
  margin: 0px;
  padding: 0px;
  user-select: auto;
  color: ${({ theme }) => theme.darkGray};
  text-decoration: underline 1px;
  border-radius: 4px;
  font-weight: 400;
  outline: none;
`;

const TextAndPrice = styled.span`
  font-size: 15px;
`;

export default ContentBox;
