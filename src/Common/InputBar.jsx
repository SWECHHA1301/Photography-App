import React from 'react';

export default function InputBar({ label, placeholder }) {
    const styles = {
        title:{

        },
        inputcontainer:{
            
        }
    }
  return (
    <>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
    </>
  );
}

