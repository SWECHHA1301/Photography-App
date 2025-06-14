import React, { useState } from 'react';
import InputBar from '../../../Common/InputBar';
import ColorPallete from '../../../Common/ColorPallete';
import LayoutOptions from '../../../Common/LayoutOptions';
import IconCategorySelector from '../../../Common/IconCategorySelector';

export default function Status() {
   const [services, setServices] = useState([
     {
       Label: '',
       Achived : '',
       icon: '',
       category:'',
       color: ''
     }
   ]);
   const [activeIndex, setActiveIndex] = useState(0);
 
    const handleChange = (index, field, value) => {
     const updated = [...services];
     updated[index][field] = value;
     setServices(updated);
   }
 
    const addService = () => {
     setServices(prev => [
       ...prev,
       {
         Label: '',
         Achived: '',
         icon: '',
         color: ''
       }
     ]);
     setActiveIndex(services.length); // shift view to new service
   };
 
    const activeService = services[activeIndex];
 
    return (
     <div>
       {/* Service Tabs */}
       <div style={{ display: 'flex', marginBottom: 10 }}>
         {services.map((_, index) => (
           <button
             key={index}
             onClick={() => setActiveIndex(index)}
             style={{
               marginRight: 10,
               padding: '8px',
               backgroundColor: activeIndex === index ? '#359597' : '#fff',
               color: activeIndex === index ? '#fff' : '#2C7A7B',
               border: activeIndex === index ? 'none' : '1px solid #2C7A7B',
               borderRadius: 10,
               cursor: 'pointer',
               maxWidth: '113px',
               width: '100%',
               fontSize: '16px',
               fontWeight: '400',
               height: '27px',
                display:'flex',
             alignItems:'center',
             justifyContent:'space-around'
             }}
           >
             Card {index + 1}
           </button>
         ))}
         <button
           onClick={addService}
           style={{
             padding: '11px ',
             backgroundColor: '#FFFFFF',
             color: '#2F2F2F',
             border: '1px solid #767676',
             borderRadius: 10,
             cursor: 'pointer',
             maxWidth: '113px',
             width: '100%',
             fontSize: '16px',
             fontWeight: '400',
             height: '27px',
             display:'flex',
             alignItems:'center',
             justifyContent:'space-around'
           }}
         >
           + Add Card
         </button>
       </div>
         
         <LayoutOptions/>
       {/* Form for Active Service */}
       <div style={{ }}>
       <h3 style={{
  fontSize: '16px',
  fontWeight: '700',
  margin: '16px 0',
}}>
  Card {activeIndex + 1}
</h3>
         <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
         <InputBar
           label="Label"
           holder="e.g. Photo Sessions"
           value={activeService.Label}
           onChange={e => handleChange(activeIndex, 'Label', e.target.value)}
              customStyle={{flex :'0.1 400px' }}
         />
         <InputBar
           label="Achived Numbers"
           holder="500+"
           value={activeService.Achived}
           onChange={e => handleChange(activeIndex, 'Achived', e.target.value)}
             customStyle={{flex :'0.1 400px' }}
         />
       <IconCategorySelector/>
        
         <ColorPallete
           value={activeService.color}
           onChange={color => handleChange(activeIndex, 'color', color)}
         />
         </div>
       </div>
     </div>
   );
 }
 
