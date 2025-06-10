import React from 'react'
import ToggleSwitch from '../../../Common/Toggles/ToggleSwitch'


export default function PageSelection() {

    const ableList = [
        {label:"Home, Portfolio, Contact", isDisabled: true },
        {label:"About",  isDisabled: false},
        {label:"Pricing", isDisabled: false},
        {label:"Testimonials", isDisabled: false},
        {label:"FAQ’s", isDisabled: false},
        {label:"Blog",isDisabled: false},
       {label: "FAQ’s", isDisabled: false},
    ]
    const styles = {
        toggleContent: {
            width: '100%',
            maxWidth: '771px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: "space-between",
            height: '50px',
            borderBottom: '1px soild #767676',

        },
        content: {
            fontSize: '16px',
            fontWeight: '400',
        }
    }
    return (
        <>
            <div>
                {
                    ableList.map((item, index) => (
                        <div key={index} style={styles.toggleContent}>
                            <p style={styles.content}>{item.label}</p>
                            <ToggleSwitch disabled={item.isDisabled} />
                        </div>
                    ))
                }

            </div>

        </>
    )
}
