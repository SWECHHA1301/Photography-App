import React from 'react';

export default function InputBar({ label, holder,customStyle = {} ,Style = {},divStyle={}, value, onChange}  ) {
    const styles = {
        title:{
            fontSize:'16px',
            fontWeight:'400',
             width:'100%',
             flex:'0.2',
             
            // maxWidth:'200px',
          
        },
        inputcontainer:{
            height:'41px',
             flex:'0.34',
            // maxWidth:'415px',
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
          // justifyContent:'space-between',
          width:'100%',
          // maxWidth:'850px',
          alignItems:'center',
          ...Style,
        }
    }
  return (
    <>
    <div style={styles.container}>
      <label style={styles.title}>{label}</label>
      <p style={{width:'100%', flex:'0.1',...divStyle}}>:</p>
      <input type="text" placeholder={holder} style={styles.inputcontainer}
       value={value}
        onChange={onChange}
      />
    </div>
    </>
  );
}

