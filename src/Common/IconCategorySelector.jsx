import React, { useState } from 'react';

const ICON_OPTIONS = [
  { label: 'Heart', value: '❤️' },
  { label: 'Camera', value: '📷' },
  { label: 'Ring', value: '💍' },
  { label: 'Star', value: '⭐' },
];

const styles = {
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '8px',
    width: '100%',
  },
  label: {
    flex: '0.18 1 250px',
    fontSize: '16px',
    fontWeight: '400',
    minWidth: '250px',
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    // backgroundColor:'pink'
  },
  iconWrapper: {
    flex: '1 1 300px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '15px',
  },
  inputWrapper: {
    position: 'relative',
    flex: '0.1 1 250px',
    minWidth: '240px',
  },
  selectBox: {
    width: '100%',
    padding: '0 16px 0 40px',
    backgroundColor: '#E9EEEA',
    borderRadius: '10px',
    border: '1px solid #767676',
    height: '41px',
    fontSize: '16px',
    fontWeight: '400',
    appearance: 'none',
    cursor: 'pointer',
    
  },
  previewIcon: {
    position: 'absolute',
    top: '50%',
    left: '12px',
    transform: 'translateY(-50%)',
    width: '24px',
    height: '24px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '4px',
    // display: 'block',
  },
  uploadWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    minWidth: '150px',
  },
  uploadLabel: {
    display: 'inline-block',
    backgroundColor: '#2C7A7B',
    color: 'white',
    padding: '0 16px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '400',
    textAlign: 'center',
    height: '30px',
    lineHeight: '30px',
    textWrap: 'nowrap',
  },
  note: {
    fontSize: '12px',
    color: '#767676',
  },
  error: {
    fontSize: '12px',
    color: '#DF5151',
  },
  divider: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#767676',
    fontSize: '14px',
  },
 clearBtnInInput: {
  position: 'absolute',
  right: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '18px',
  fontWeight: '600',
  color: '#000',
  cursor: 'pointer',
  zIndex: 3,
},


};

export default function IconCategorySelector() {

 const clearSelection = () => {
  setSelectedIcon('');
  setUploadedIcon(null);
  setUploadError('');
};



  const [selectedIcon, setSelectedIcon] = useState('');
  const [uploadedIcon, setUploadedIcon] = useState(null);
  const [uploadError, setUploadError] = useState('');

  const handleIconSelect = (e) => {
    setSelectedIcon(e.target.value);
    setUploadedIcon(null);
    setUploadError('');
  };

  const handleIconUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const img = new Image();
    const reader = new FileReader();

    reader.onload = function (event) {
      img.src = event.target.result;
      img.onload = () => {
        if (img.width === img.height) {
          setUploadedIcon(img.src);
          setSelectedIcon('');
          setUploadError('');
        } else {
          setUploadError('Image must be square (1:1 ratio)');
        }
      };
    };

    reader.readAsDataURL(file);
  };

  const renderPreview = () => {
  if (uploadedIcon) {
    return <img src={uploadedIcon} alt="Uploaded" style={styles.image} />;
  } else if (selectedIcon) {
    return selectedIcon;
  } else {
    return '+';
  }
};



  return (
    <div style={styles.row}>
      <label style={styles.label}>
        <span>Icon</span>
        <span>:</span>
      </label>

      <div style={styles.iconWrapper}>
        {/* Icon Select */}
  <div style={styles.inputWrapper}>
  <div style={styles.previewIcon}>{renderPreview()}</div>

  <select
    value={selectedIcon}
    onChange={handleIconSelect}
    style={styles.selectBox}
    disabled={!!uploadedIcon}
  >
    <option value="">Select Icon</option>
    {ICON_OPTIONS.map((icon) => (
      <option key={icon.label} value={icon.value}>
        {icon.label} {icon.value}
      </option>
    ))}
  </select>

  {(uploadedIcon || selectedIcon) && (
    <button
      type="button"
      onClick={clearSelection}
      style={styles.clearBtnInInput}
    >
      ×
    </button>
  )}
</div>


        {/* Divider */}
        <div style={styles.divider}>
          <span>|</span>
          <span>OR</span>
          <span>|</span>
        </div>

        {/* Upload Section */}
        <div style={styles.uploadWrapper}>
          <label style={styles.uploadLabel}>
            Upload
            <input
              type="file"
              accept="image/*"
              onChange={handleIconUpload}
              style={{ display: 'none' }}
            />
          </label>
          {uploadError ? (
            <div style={styles.error}>{uploadError}</div>
          ) : (
            <div style={styles.note}>(Must be square - 1:1 ratio)</div>
          )}
        </div>
      </div>
    </div>
  );
}

