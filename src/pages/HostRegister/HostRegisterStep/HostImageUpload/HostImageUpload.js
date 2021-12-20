import React, { useRef } from 'react';
import styled from 'styled-components';

const HostImageUpload = ({
  setHostImages,
  uploadedImages,
  setUploadedImages,
}) => {
  const keyIndex = useRef(0);
  const imageInputRef = useRef();

  const handdleFile = ({ target }) => {
    const images = [...target.files];
    const imageUrls = [...uploadedImages];
    images.forEach(image =>
      imageUrls.push({
        id: keyIndex.current++,
        url: URL.createObjectURL(image),
        name: image.name,
      })
    );

    setUploadedImages(imageUrls);
    setHostImages(prev => [...prev, ...target.files]);
  };

  return (
    <ImageUploadWrapper>
      <ImagePreviewContainer>
        {!uploadedImages.length && (
          <NoImage src="/images/noimages.png" alt="noimage" />
        )}
        {uploadedImages.map(({ id, url, name }) => (
          <ImagePreview key={id} src={url} alt={name} />
        ))}
      </ImagePreviewContainer>
      <UploadButtonContainer>
        <ImageUploadButton onClick={() => imageInputRef.current.click()}>
          이미지 업로드
        </ImageUploadButton>
      </UploadButtonContainer>
      <HiddenInput
        type="file"
        onChange={handdleFile}
        multiple
        accept="image/*"
        ref={imageInputRef}
      />
    </ImageUploadWrapper>
  );
};

export default HostImageUpload;

const ImageUploadWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  padding: 60px 0 10px;
  width: 100%;
  height: 86%;
`;

const ImagePreviewContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImagePreview = styled.img`
  margin: 20px;
  width: 400px;
  height: 300px;
  object-fit: cover;
`;

const NoImage = styled.img`
  margin: 20px;
  width: 400px;
  height: 300px;
  object-fit: cover;
`;

const UploadButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
`;

const ImageUploadButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.highlight};
  border: none;
  color: white;

  &:active {
    padding: 13px 28px;
    margin: 2px;
    font-size: 13px;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;
