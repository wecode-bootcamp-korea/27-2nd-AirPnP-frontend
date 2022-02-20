import { useRef } from 'react';

function useHostImageUpload(uploadedImages, setUploadedImages, setHostImages) {
  const keyIndex = useRef(0);
  const imageInputRef = useRef(null);

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

  return { imageInputRef, handdleFile };
}

export default useHostImageUpload;
