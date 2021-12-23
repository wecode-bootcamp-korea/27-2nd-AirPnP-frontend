import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { AiFillStar } from 'react-icons/ai';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { MdCancelPresentation } from 'react-icons/md';
import { BsFillPinMapFill } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsBagDash } from 'react-icons/bs';
import { RiMedalLine } from 'react-icons/ri';

import SlickDetail from './SlickDetail/SlickDetail';
import DayPicker from '../../components/DayPicker/DayPicker';
import Map from '../../components/Map/Map';

import API_CONFIG from '../../config';

import { ArticleData } from './Data/ArticleData';
import { AdditionalListData } from './Data/AdditionalListData';

function HostDetail() {
  const { host_id } = useParams();
  const [detail, setDetail] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [dateInput, setDateInput] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const token = localStorage.getItem('token') || '';

  const adjustDate = (type, date) => {
    if (type === 'startDate' && date > dateInput.endDate) {
      setDateInput({
        startDate: date,
        endDate: date,
      });
    } else {
      setDateInput(prevDate => ({ ...prevDate, [type]: date }));
    }
    calculateTotalPrice();
  };

  const calculateTotalPrice = () => {
    const { startDate, endDate } = dateInput;
    const term = Math.round((endDate - startDate) / (24 * 60 * 60 * 1000)) + 1;
    setTotalPrice(detail.price * term);
  };

  const parseDate = date => {
    const year = date.getFullYear();
    const month = 1 + date.getMonth();
    const day = date.getDate();

    return year + '-' + month + '-' + day;
  };

  const bookData = () => {
    fetch(API_CONFIG.BOOKING, {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        start_date: parseDate(dateInput.startDate),
        end_date: parseDate(dateInput.endDate),
        total_price: totalPrice,
        host_id: host_id,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'SUCCESS') {
          if (
            window.confirm(
              '정상적으로 예약이 완료되었습니다. 메인 화면으로 이동하시겠습니까?'
            )
          ) {
            navigate('/');
          }
        } else if ((data.message = 'ALREADY_BOOKED')) {
          alert('예약이 불가능한 날짜입니다.');
        }
      });
  };

  useEffect(() => {
    fetch(API_CONFIG.HOST_DETAIL + host_id)
      .then(res => res.json())
      .then(data => {
        setDetail(data.RESULT);
      });
  }, [host_id]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const contentRef = useRef(null);

  return (
    <DetailMainWrapper>
      <DetailMainTitle>
        <DetailTopBar>
          <TitleBox>
            <TopBarTitle>{detail.title}</TopBarTitle>
          </TitleBox>
          <TopBarSubTitle>
            <TopLeft>
              <Category>
                <AiFillStar />
                &nbsp; {detail.category}
              </Category>
              <HostLocal>
                <AiFillStar />
                &nbsp;{detail.address}
              </HostLocal>
            </TopLeft>
          </TopBarSubTitle>
        </DetailTopBar>
      </DetailMainTitle>
      <Container>
        <MainRightBar>
          <DetailImgBox>
            <SlickDetail detail={detail} />
          </DetailImgBox>
          <DetailExplanation>
            <SubTitle>
              <Intro>
                <MainIntro>
                  {detail.host_name}
                  {detail.subtitle}
                </MainIntro>
                <SubIntro>✦ 경력: {detail.career}년</SubIntro>
              </Intro>
              <ProfileImg src="/images/peopleicon.jpeg" alt="profile-image" />
            </SubTitle>
            <ArticleStep>
              {ArticleData.map(list => {
                return (
                  <Article key={list.id}>
                    <ArticleIcon>{list.icon}</ArticleIcon>
                    <ArticleLetter>
                      <Bold>{list.boldText}</Bold>
                      <Light>{list.lightText}</Light>
                    </ArticleLetter>
                  </Article>
                );
              })}
            </ArticleStep>
            <Description>
              <DescriptionContent ref={contentRef}>
                {detail.description}
              </DescriptionContent>
              <OpenModalBtn onClick={openModal}>
                <h1>더보기...</h1>
              </OpenModalBtn>
            </Description>
            {showModal ? (
              <Background>
                <ModalContainer>
                  <ModalNav>
                    <BtnMessage>상세보기</BtnMessage>
                    <CloseIcon onClick={closeModal}>
                      <MdCancelPresentation />
                    </CloseIcon>
                  </ModalNav>
                  <ModalContent>{detail.description}</ModalContent>
                </ModalContainer>
              </Background>
            ) : null}
            <InfoListBox>
              <BasicInfo>
                <InfoTitle>기본 정보</InfoTitle>
                <List>
                  <InfoListIcon>
                    <BsFillPinMapFill />
                  </InfoListIcon>
                  <InfoListLetter>{detail.address}</InfoListLetter>
                </List>
                <List>
                  <InfoListIcon>
                    <AiOutlineClockCircle />
                  </InfoListIcon>
                  <InfoListLetter>
                    연락 가능 시간: 오전 9시 부터 오후 6시
                  </InfoListLetter>
                </List>
              </BasicInfo>
              <AdditionInfo>
                <AdditionInfoTitle>추가 정보</AdditionInfoTitle>
                <AdditionalList>
                  <AdditionInfoListIcon>
                    <BsBagDash />
                  </AdditionInfoListIcon>
                  <AdditionInfoListLetter>
                    경력: {detail.career}년
                  </AdditionInfoListLetter>
                </AdditionalList>
                <AdditionalList>
                  <AdditionInfoListIcon>
                    <RiMedalLine />
                  </AdditionInfoListIcon>
                  <AdditionInfoListLetter>
                    자격증 등록 완료
                  </AdditionInfoListLetter>
                </AdditionalList>
              </AdditionInfo>
            </InfoListBox>
            <MapBox>
              <HostingMapTitle>호스팅 지역</HostingMapTitle>
              <MapContainer>
                <Map longitude={detail.longitude} latitude={detail.latitude} />
              </MapContainer>
              <LocalDes>{detail.local_description}</LocalDes>
            </MapBox>
          </DetailExplanation>
        </MainRightBar>
        <MainLeftBar>
          <Reservation>
            <ReservationTitle>
              {totalPrice
                ? `₩ 총가격:  ${totalPrice} 원`
                : '요금을 확인하려면 날짜를 입력하세요.'}
            </ReservationTitle>
            {Object.keys(detail).length && (
              <ReservationDate>
                <DateBoxStart>
                  <DayPicker
                    type="start"
                    dateInput={dateInput}
                    adjustDate={adjustDate}
                    bookingDate={detail.booking_date}
                  />
                </DateBoxStart>
                <DateBoxEnd>
                  <DayPicker
                    type="end"
                    dateInput={dateInput}
                    adjustDate={adjustDate}
                    bookingDate={detail.booking_date}
                  />
                </DateBoxEnd>
              </ReservationDate>
            )}

            <ReservationSubTitle>
              1일 당 / {detail.price} 원
            </ReservationSubTitle>
            <ReservationButton onClick={bookData}>예약하기</ReservationButton>
          </Reservation>
        </MainLeftBar>
      </Container>
      <ContainerBottom>
        <HostBox>
          <HostIntro>
            <HostProfile>
              <HostImg src="/images/peopleicon.jpeg" alt="profile-img" />
              <HostNickName>
                <HostID>호스트: {detail.host_name}님</HostID>
                <HostSignUpDate>회원 가입일: 2017년</HostSignUpDate>
              </HostNickName>
            </HostProfile>
            <CertifiCation>
              <CertificationCell>
                <CellIcon>
                  <AiFillStar />
                </CellIcon>
                <CellLetter>{detail.category}</CellLetter>
                <CellIcon>
                  <AiOutlineSafetyCertificate />
                </CellIcon>
                <CellLetter>본인 인증 완료</CellLetter>
              </CertificationCell>
            </CertifiCation>
          </HostIntro>
          <HostContact>
            <Additional>
              {AdditionalListData.map(list => {
                return (
                  <AdditionalList key={list.id}>
                    <AdditionalInfo>{list.info}</AdditionalInfo>
                  </AdditionalList>
                );
              })}
            </Additional>
            <Caution>
              <CautionIcon>
                <AiOutlineSafetyCertificate />
              </CautionIcon>
              <CautionMessage>
                안전한 결제를 위해 에어피앤피 웹사이트나 앱 외부에서 송금하거나
                대화를 나누지 마세요.
              </CautionMessage>
            </Caution>
          </HostContact>
        </HostBox>
      </ContainerBottom>
    </DetailMainWrapper>
  );
}

const DetailMainWrapper = styled.main`
  width: 1200px;
  margin: 0 auto;
`;

const DetailMainTitle = styled.div`
  display: flex;
`;
const DetailImgBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 700px;
  height: 500px;
  border-radius: 20px;
`;
const MainLeftBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

const MainRightBar = styled.div`
  display: flex;
  flex-direction: column;
`;
const DetailTopBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin: 100px auto;
  width: 100%;
`;
const TitleBox = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-left: 30px;
`;
const TopBarTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 45px;
`;
const Category = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HostLocal = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
const TopBarSubTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 98%;
  margin-top: 50px;
  font-size: 18px;
`;
const Container = styled.main`
  display: flex;
`;
const TopLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DetailExplanation = styled.div`
  width: 650px;
  margin-top: 80px;
`;
const SubTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 650px;
  height: 146px;
  border-bottom: ${props => props.theme.borderMiddleGray};
`;
const Intro = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;
const MainIntro = styled.div`
  margin-bottom: 10px;
  font-size: 27px;
`;
const SubIntro = styled.div`
  margin: 5px;
  font-size: 15px;
`;
const Article = styled.div`
  display: flex;
  margin-top: 15px;
`;

const ArticleIcon = styled.div`
  margin: 10px 0 0 10px;
  font-size: 40px;
  font-weight: 100;
`;

const ArticleLetter = styled.div`
  margin-left: 20px;
`;

const Bold = styled.h2`
  margin: 20px 0 5px 0;
  font-size: 20px;
`;

const Light = styled.h4`
  color: ${props => props.theme.middleGray};
`;
const AdditionInfoListIcon = styled.span`
  font-size: 20px;
`;
const AdditionInfoListLetter = styled.span`
  margin-left: 20px;
  font-size: 16px;
`;
const ProfileImg = styled.img`
  margin-top: 60px;
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;
const ArticleStep = styled.div`
  width: 650px;
  height: 233px;
  height: 233px;
  border-bottom: ${props => props.theme.borderMiddleGray};
`;
const Description = styled.div`
  width: 650px;
  height: 250px;
  border-bottom: ${props => props.theme.borderMiddleGray};
`;
const DescriptionContent = styled.p`
  margin-top: 30px;
  color: ${props => props.theme.darkGray};
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  &.show {
    display: block;
    max-height: none;
    overflow: auto;
    -webkit-line-clamp: unset;
  }
`;
const OpenModalBtn = styled.button`
  width: 100px;
  height: 30px;
  color: ${props => props.theme.darkGray};
  font-size: 15px;
  background: none;
  border: none;
  cursor: pointer;
  max-height: 2rem;
  line-height: 2rem;
  padding-left: 20px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 18%
  );
  &.hide {
    display: none;
  }
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 500px;
  height: 80%;
  padding: 16px;
  background: white;
  border-radius: 10px;
  text-align: center;
`;
const ModalNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const BtnMessage = styled.span`
  margin-left: 200px;
  font-size: 20px;
`;
const CloseIcon = styled.span`
  font-size: 20px;
`;
const ModalContent = styled.p`
  margin: 20px;
  font-size: 15px;
  line-height: 30px;
`;
const InfoListBox = styled.div`
  display: flex;
  width: 650px;
  height: 350px;
  border-bottom: ${props => props.theme.borderMiddleGray};
`;
const BasicInfo = styled.div`
  width: 400px;
  margin: 100px 0 0 10px;
`;
const AdditionInfo = styled.div`
  width: 340px;
  margin: 100px 0 0 20px;
`;
const InfoTitle = styled.h1`
  margin: 0 0 50px 10px;
  font-size: 20px;
`;

const List = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 20px 15px;
  font-size: 30px;
`;

const InfoListIcon = styled.span`
  font-size: 20px;
`;

const InfoListLetter = styled.span`
  margin-left: 20px;
  font-size: 16px;
`;

const AdditionInfoTitle = styled.h1`
  margin: 0 0 50px 10px;
  font-size: 20px;
`;
const Reservation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 200px;
  width: 400px;
  height: 400px;
  margin: 0 0 30px 50px;
  border-radius: 30px;
  box-shadow: 1px 1px 10px 8px rgba(0, 0, 0, 0.2);
`;
const ReservationTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 30px;
  margin-top: 40px;
  font-size: 20px;
`;
const ReservationSubTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 35px 0 0 15px;
  color: ${props => props.theme.middleGray};
  font-size: 15px;
  font-weight: 600;
`;
const ReservationDate = styled.div`
  display: flex;
  justify-content: center;
  width: 350px;
  height: 100px;
  margin-top: 30px;
  border-radius: 20px;
  border: ${props => props.theme.borderMiddleGray};
`;
const DateBoxStart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 100px;
  border-right: ${props => props.theme.borderMiddleGray};
`;
const DateBoxEnd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 100px;
`;
const ReservationButton = styled.button`
  width: 250px;
  height: 50px;
  margin-top: 40px;
  background-color: ${props => props.theme.highlight};
  color: white;
  font-size: 16px;
  font-weight: 500;
  border-radius: 20px;
  border: 0.5px solid black;
  cursor: pointer;
`;
const ContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
`;
const MapBox = styled.div`
  width: 700px;
  height: 670px;
  margin-top: 20px;
`;
const HostingMapTitle = styled.div`
  margin: 20px;
  font-size: 30px;
`;
const MapContainer = styled.div`
  width: 700px;
  height: 500px;
  margin-left: 15px;
`;
const LocalDes = styled.p`
  width: 700px;
  margin: 30px 0 0 20px;
`;
const HostBox = styled.div`
  display: flex;
  width: 1200px;
  height: 350px;
  border-top: ${props => props.theme.borderMiddleGray};
`;

const HostIntro = styled.div`
  width: 50%;
  height: 500px;
  margin: 70px 0 0 0 20px;
`;

const HostProfile = styled.div`
  display: flex;
  margin: 60px 0 20px 10px;
`;
const HostImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;
const HostNickName = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 15px;
`;
const HostID = styled.span`
  font-size: 30px;
  margin-bottom: 5px;
`;
const HostSignUpDate = styled.span`
  color: ${props => props.theme.middleGray};
`;
const CertifiCation = styled.div`
  display: flex;
  margin: 30px 0 0 15px;
`;
const CertificationCell = styled.div`
  display: flex;
`;

const CellIcon = styled.div`
  font-size: 18px;
`;

const CellLetter = styled.span`
  margin: 2px 10px 0 10px;
`;
const HostContact = styled.div`
  display: flex;
  flex-direction: column;
`;
const Additional = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px 0 50px 100px;
`;
const AdditionalList = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 13px;
`;
const AdditionalInfo = styled.span`
  font-size: 15px;
`;
const Caution = styled.div`
  display: flex;
  margin-left: 90px;
`;
const CautionMessage = styled.div`
  width: 300px;
  margin-left: 10px;
  line-height: 20px;
  letter-spacing: 0.5px;
`;
const CautionIcon = styled.div`
  font-size: 25px;
`;

export default HostDetail;
