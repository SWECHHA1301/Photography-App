import React from 'react';
import EyeToggle from "../../../Common/Toggles/EyeToggle";
import { GripVertical } from 'lucide-react';

export default function NavigationOrder({ data = {}, updateData }) {
  const content = [
    { id: 'home', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
    { id: 'about', label: 'About' },
  ];

  const handleToggle = (id) => {
    const updated = {
      ...data,
      [id]: !data[id],
    };
    updateData?.(updated);
  };

  const styles = {
    toggleContent: {
      width: '100%',
      maxWidth: '760px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: "space-between",
      height: '64px',
    },
    elementContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
    },
    content: {
      fontSize: '16px',
      fontWeight: '400',
    },
  };

  return (
    <>
      <div>
        {content.map((item, index) => (
          <div key={item.id} style={styles.toggleContent}>
            <div style={styles.elementContainer}>
              <GripVertical />
              <p style={styles.content}>{`${index + 1}.`}</p>
              <p style={styles.content}>{item.label}</p>
            </div>
            <EyeToggle
              checked={data[item.id] ?? true}
              onChange={() => handleToggle(item.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
}
