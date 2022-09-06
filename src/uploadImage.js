import React from "react";
import axios from "axios";
const UploadImages = () => {
  const onSelectFile = async (e) => {
    const file = e.target.files[0];
    const convertedFile = await convertToBase64(file);

    // Request will be sent from here in the future
    const s3URL = await axios.post("http://localhost:3001/upload", {
      image: convertedFile,
      imageName: file.name,
    });
  };
  const convertToBase64 = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
    });
  };

  return <input type="file" accept="image/*" />;
};
export default UploadImages;
