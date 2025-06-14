import React from 'react';

export default function CategorySelector({
  selectedCategory,
  setSelectedCategory,
  CATEGORY_OPTIONS,
  customStyle = {},
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: '100%',
        gap: '8px',
      }}
    >
      {/* Label */}
      <div
        style={{
          flex: '0.15 1 240px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '16px',
          fontWeight: '400',
          minWidth: '250px',
        //   backgroundColor:'red'
        }}
      >
        <label>Select Category</label>
        <span>:</span>
      </div>

      {/* Dropdown */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{
          flex: '0.1 1 210px',
          minWidth: '200px',
          height: '41px',
          backgroundColor: '#E9EEEA',
          borderRadius: '10px',
          border: '1px solid #767676',
          fontSize: '16px',
          fontWeight: '400',
          padding: '0 16px',
          width: '100%',
          ...customStyle,
        }}
      >
        {CATEGORY_OPTIONS.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
