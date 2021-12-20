import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { lighten } from 'polished';
import AddressSelect from './AddressSelect/AddressSelect';
import CategorySelect from './CategorySelect/CategorySelect';
import DetailInfo from './DetailInfo/DetailInfo';
import HostImageUpload from './HostImageUpload/HostImageUpload';
import API_CONFIG from '../../../config';

const HostRegisterStep = () => {
  const [hostInfoList, setHostInfoList] = useState({
    local_description: '',
    address: '',
    category: '',
    title: '',
    phone_number: '',
    career: '',
    price: '',
    subtitle: '',
    description: '',
  });
  const [hostImages, setHostImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const params = useParams();
  const pageType = params['*'];
  const navigate = useNavigate();

  const token = localStorage.getItem('token') || '';

  const adjustHostInfo = (key, value) => {
    setHostInfoList(prev => ({ ...prev, [key]: value }));
  };

  const fetchData = async () => {
    const hostData = await fetch(API_CONFIG.HOST_REGISTER, {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: JSON.stringify(hostInfoList),
    });
    const hostResponse = await hostData.json();

    await fetch(`${API_CONFIG.HOST_IMAGE}?host_id=${hostResponse.host_id}`, {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: createFormData(),
    });
  };

  const createFormData = () => {
    const imageData = new FormData();
    hostImages.forEach(image => imageData.append('files', image));
    return imageData;
  };

  const navigateProcess = () => {
    if (pageType === 'category-type') {
      navigate('/host-register/register-process/address-select');
    } else if (pageType === 'address-select') {
      navigate('/host-register/register-process/host-image');
    } else if (pageType === 'host-image') {
      navigate('/host-register/register-process/detail-info');
    } else if (pageType === 'detail-info') {
      fetchData();
      navigate('/host-register/register-process/complete');
    }
  };

  const navigateBack = () => {
    if (pageType === 'address-select') {
      navigate('/host-register/register-process/category-type');
    } else if (pageType === 'host-image') {
      navigate('/host-register/register-process/address-select');
    } else if (pageType === 'detail-info') {
      navigate('/host-register/register-process/host-image');
    }
  };

  return (
    <RegisterProcessContainer>
      <RegisterGuideSection>
        {(() => {
          if (pageType === 'category-type') {
            return (
              <>
                <GuideText>재능을</GuideText>
                <GuideText>선택해 주세요</GuideText>
              </>
            );
          } else if (pageType === 'address-select') {
            return (
              <>
                <GuideText>주소를</GuideText>
                <GuideText>입력해 주세요</GuideText>
              </>
            );
          } else if (pageType === 'host-image') {
            return (
              <>
                <GuideText>이미지를</GuideText>
                <GuideText>업로드해 주세요</GuideText>
              </>
            );
          } else if (pageType === 'detail-info') {
            return (
              <>
                <GuideText>상세 정보를</GuideText>
                <GuideText>입력해 주세요</GuideText>
              </>
            );
          }
        })()}
      </RegisterGuideSection>
      <RegisterStepSection>
        <Routes>
          <Route
            path="/category-type"
            element={
              <CategorySelect
                adjustHostInfo={adjustHostInfo}
                hostInfoList={hostInfoList}
              />
            }
          />
          <Route
            path="/address-select"
            element={
              <AddressSelect
                adjustHostInfo={adjustHostInfo}
                hostInfoList={hostInfoList}
              />
            }
          />
          <Route
            path="/host-image"
            element={
              <HostImageUpload
                setHostImages={setHostImages}
                uploadedImages={uploadedImages}
                setUploadedImages={setUploadedImages}
              />
            }
          />
          <Route
            path="/detail-info"
            element={
              <DetailInfo
                adjustHostInfo={adjustHostInfo}
                hostInfoList={hostInfoList}
              />
            }
          />
        </Routes>
        <StepFooter>
          <RegisterButtonContainer>
            <ContinueButton onClick={navigateProcess}>계속</ContinueButton>
            {pageType !== 'category-type' && (
              <BackButton onClick={navigateBack}>뒤로</BackButton>
            )}
          </RegisterButtonContainer>
        </StepFooter>
      </RegisterStepSection>
    </RegisterProcessContainer>
  );
};

export default HostRegisterStep;

const RegisterProcessContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  background-color: ${({ theme }) => theme.black};
`;

const RegisterGuideSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;
  width: 50%;
  height: 100%;
  background: linear-gradient(150deg, ${({ theme }) => theme.highlight}, red);
`;

const GuideText = styled.h1`
  font-weight: 700;
  font-size: 48px;
  color: white;
`;

const RegisterStepSection = styled.section`
  position: relative;
  padding: 0 60px;
  width: 50%;
  height: 100%;
  background-color: white;
`;

const StepFooter = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 20px;
  height: 14%;
  border-top: 2px solid ${({ theme }) => theme.lightGray};
  background-color: white;
`;

const RegisterButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 60px;
`;

const ContinueButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.black};
  border: none;
  color: white;

  &:active {
    padding: 13px 28px;
    margin: 2px;
    font-size: 13px;
  }

  &:disabled {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 30px;
    border-radius: 10px;
    background-color: ${lighten(0.2, '#222')};
    border: none;
    color: white;
  }
`;

const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 30px;
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid #222;

  &:active {
    padding: 13px 28px;
    margin: 2px;
    font-size: 13px;
  }
`;
