import React, { useRef, useState } from 'react';

export default function HeroMedia() {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setFileName('');
    setImagePreview(null);
    fileInputRef.current.value = null;
  };
const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap', // allows stacking on smaller screens
  width: '100%',
  alignItems: 'flex-start',
  gap: '8px',
};

const labelWrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '16px',
  fontWeight: '400',
  padding: '19px 0',

  flex: '0.4', 
  gap:'20px',
  minWidth: '250px',
 
};



  const dropAreaStyle = {
  border: '1px solid #767676',
  padding: '10px 16px',
  backgroundColor: '#E9EEEA',
  borderRadius: '10px',
  flex: '0.5 400px ',
  width: '100%',
  color: '#767676',
  height: '212px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'hidden',
  textAlign: 'center',
};
  const imageStyle = {
    width:'200px',
    height:'200px',
    borderRadius: '6px',
    objectFit: 'cover',
  };

  const buttonStyle = {
    maxWidth: '156px',
    backgroundColor: '#2C7A7B',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    height: '38px',
    width: '100%',
    fontSize: '16px',
    fontWeight: '400',
    cursor: 'pointer',
    marginTop: '12px',
  };

  const removeButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#A94442',
  };

  return (
    <div style={containerStyle}>
      <div style={labelWrapperStyle}>
        <span>Upload Hero Media</span><span>:</span>
      </div>
      <div style={dropAreaStyle}>
        {imagePreview ? (
          <>
            <img src={imagePreview} alt="Preview" style={imageStyle} />
            <p style={{ marginTop: '8px' }}>{fileName}</p>
            <button style={removeButtonStyle} onClick={handleRemoveImage}>
              Remove
            </button>
          </>
        ) : (
          <>
            <p>
              Drag and drop your Hero Background image here (wwww x hhhh)
              <br />
              Supports JPG, PNG, GIF up to 10M
            </p>
            <button style={buttonStyle} onClick={handleBrowseClick}>
              Browse
            </button>
          </>
        )}

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
}


