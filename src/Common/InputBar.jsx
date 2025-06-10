import React from 'react';

export default function InputBar({ label, holder,customStyle = {} }) {
    const styles = {
        title:{
            fontSize:'16px',
            fontWeight:'400',
             width:'100%',
            maxWidth:'200px',
        },
        inputcontainer:{
            height:'41px',
            maxWidth:'415px',
             width:'100%',
            backgroundColor:'#E9EEEA',
            borderRadius:'10px',
            border:'1px solid #767676',
               fontSize:'16px',
            fontWeight:'400',
            padding:'0 16px',
              ...customStyle, 
        },
        container:{
          display:'flex',
          justifyContent:'space-between',
          width:'100%',
          maxWidth:'850px',
          alignItems:'center',
        }
    }
  return (
    <>
    <div style={styles.container}>
      <label style={styles.title}>{label}</label>
      <p style={{maxWidth:'50px',width:'100%'}}>:</p>
      <input type="text" placeholder={holder} style={styles.inputcontainer}/>
    </div>
    </>
  );
}

