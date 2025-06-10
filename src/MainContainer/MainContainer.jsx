import React from 'react'

const MainContainer = ({ children }) => {
    return (
        <div>

           

                <div style={{
                  
                    width: '100%',
                   
                    
                }}>
                    {
                        children
                    }
                </div>
            </div>
       )
}

export default MainContainer