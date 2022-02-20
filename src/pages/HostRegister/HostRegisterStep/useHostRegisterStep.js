import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import API_CONFIG from '../../../config';

function useHostRegisterStep() {
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
  const location = useLocation();

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

    if (hostResponse.result === 'CREATED') {
      await fetch(`${API_CONFIG.HOST_IMAGE}?host_id=${hostResponse.host_id}`, {
        method: 'POST',
        headers: {
          Authorization: token,
        },
        body: createFormData(),
      });
      navigate('/host-register/register-process/complete');
    } else {
      alert('호스트 등록에 실패했습니다.\n입력정보를 확인해주세요');
    }
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

  return {
    hostInfoList,
    uploadedImages,
    setUploadedImages,
    location,
    setHostImages,
    navigateProcess,
    adjustHostInfo,
    navigateBack,
    pageType,
  };
}

export default useHostRegisterStep;
