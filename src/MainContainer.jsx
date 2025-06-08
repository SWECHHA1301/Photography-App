import React from 'react'

const MainContainer = ({ children }) => {
    return (
        <div>
          
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '5px'
            }}>
                
                <div style={{
                    height: '92vh',
                    overflowY: 'scroll',
                    width: '100%',
                    padding: "24px",
                }}>
                    {
                        children
                    }
                </div>
            </div>
        </div>
    )
}

export default MainContainer