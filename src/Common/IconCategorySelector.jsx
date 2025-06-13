import React, { useState } from 'react';

const ICON_OPTIONS = [
  { label: 'Heart', value: '❤️' },
  { label: 'Camera', value: '📷' },
  { label: 'Ring', value: '💍' },
  { label: 'Star', value: '⭐' },
];

const styles = {
  container: {
    width: '100%',
    marginBottom: '24px',
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    // gap: '8px',
  },
  label: {
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start',
    fontSize: '16px',
    fontWeight: '400',
    minWidth: '100px',
    flex: '0.3',
  },
  inputGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '10px',
    flex: '0.49',
  },
  previewBox: {
    width: '40px',
    height: '40px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
    color: '#999',
  },
  select: {
    padding: '8px',
    backgroundColor: '#E9EEEA',
    borderRadius: '10px',
    border: '1px solid #767676',
    height: '41px',
    minWidth: '150px',
    flex: '1',
    fontSize:'16px',
    fontWeight:'400'
  },
  uploadWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '4px',
  
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
    width: '168px',
    textAlign: 'center',
    height: '30px',
    lineHeight: '30px',
  },
  note: {
    fontSize: '12px',
    color: '#DF5151',
    marginTop: '4px',
  },
};

export default function IconCategorySelector() {
  const [selectedIcon, setSelectedIcon] = useState('');
  const [uploadedIcon, setUploadedIcon] = useState(null);

  const handleIconSelect = (e) => {
    setSelectedIcon(e.target.value);
    setUploadedIcon(null); // Clear image if icon selected
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
        } else {
          alert('Image must be square (1:1 ratio)');
        }
      };
    };

    reader.readAsDataURL(file);
  };

  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <label style={styles.label}>
          <span style={{flex:'3'}}>Icon</span>
          <span style={{flex:'1.1'}}>:</span>
        </label>
        <div style={styles.inputGroup}>
          {/* Icon Dropdown */}
          <select value={selectedIcon} onChange={handleIconSelect} style={styles.select}>
            <option value="">Select Icon</option>
            {ICON_OPTIONS.map((icon) => (
              <option key={icon.label} value={icon.value}>
                {icon.label} {icon.value}
              </option>
            ))}
          </select>

          {/* Icon or Image Preview */}
          <div style={styles.previewBox}>
            {uploadedIcon ? (
              <img
                src={uploadedIcon}
                alt="Uploaded Icon"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : selectedIcon ? (
              selectedIcon
            ) : (
              '+'
            )}
          </div>

          {/* Upload */}
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
            <div style={styles.note}>(Must be square - 1:1 ratio)</div>
          </div>
        </div>
      </div>
    </div>
  );
}





