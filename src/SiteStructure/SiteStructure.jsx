import React from 'react'
import Title from '../Common/Title'

export default function SiteStructure() {
    const styles ={
        constainer:{
             borderRadius:'10px',
             border:'1px solid #767676',
             width:'100%',
        }
    }
  return (
    <>
    <div style={styles.constainer}>
    <Title title={"Site Structure"}/>
    </div>
    </>
  )
}
