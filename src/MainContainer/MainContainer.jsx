import React from 'react'

const MainContainer = ({ children }) => {
    return (
        <div>

           

                <div style={{
                    height: '92vh',
                    width: '100%',
                    padding: "24px",
                    overflowX: 'hidden',
                }}>
                    {
                        children
                    }
                </div>
            </div>
       )
}

export default MainContainer