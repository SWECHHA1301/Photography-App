import React, { useState } from 'react';

export default function Inquiries() {
  const [inquiries, setInquiries] = useState([
    {
      name: 'Arjun Sharma',
      phone: '948XXXXXXX',
      email: 'Arjsharma@gmail.com',
      subject: 'Testing Contact Form',
      message: 'Testing Again',
      date: '02 June 2025',
      resolved: false,
    },
    {
      name: 'Arjun Sharma',
      phone: '948XXXXXXX',
      email: 'Arjsharma@gmail.com',
      subject: 'Contact Form',
      message: 'Testing Again',
      date: '02 June 2025',
      resolved: true,
    },
    // Add more entries if needed
  ]);

  const toggleResolved = (index) => {
    const updated = [...inquiries];
    updated[index].resolved = !updated[index].resolved;
    setInquiries(updated);
  };

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        width: "100%",
        height: "680px",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div style={{ padding: '20px' }}>
        <h2 style={{ color: '#2C7A7B' }}>Inquiries</h2>
        <p style={{ color: '#767676', fontSize: '14px' }}>List of queries received</p>
      </div>

      {/* Table container */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <div style={{ overflowY: 'auto', maxHeight: '360px', paddingRight: '16px' }}>
          <table style={{ width: '100%', minWidth: '950px', borderCollapse: 'separate', borderSpacing: '0 10px' }}>
            <thead style={{
              position: 'sticky',
              top: 0,
              backgroundColor: '#fff',
              zIndex: 1,
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
            }}>
              <tr>
                <th style={{ ...thStyle, textAlign: "left" }}>Inquiry Status</th>
                <th style={{ ...thStyle, textAlign: "center" }}>Name</th>
                <th style={{ ...thStyle, textAlign: "center" }}>Phone</th>
                <th style={{ ...thStyle, textAlign: "center" }}>Email</th>
                <th style={{ ...thStyle, textAlign: "center" }}>Subject</th>
                <th style={{ ...thStyle, textAlign: "center" }}>Message</th>
                <th style={{ ...thStyle, textAlign: "right", paddingRight: '20px' }}>Created At</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inq, index) => (
                <tr key={index} style={{ backgroundColor: '#fff' }}>
                  <td style={{ ...tdStyle, borderBottomLeftRadius: 10 }}>
                    <div style={switchWrapperStyle}>
                      <div
                        onClick={() => toggleResolved(index)}
                        style={{
                          ...switchBtnStyle,
                          backgroundColor: !inq.resolved ? '#F2545B' : '#E2E2E2',
                          color: !inq.resolved ? '#fff' : '#333',
                        }}
                      >
                        Not Resolved
                      </div>
                      <div
                        onClick={() => toggleResolved(index)}
                        style={{
                          ...switchBtnStyle,
                          backgroundColor: inq.resolved ? '#2F5D62' : '#E2E2E2',
                          color: inq.resolved ? '#fff' : '#333',
                        }}
                      >
                        Resolved
                      </div>
                    </div>
                  </td>
                  <td style={tdStyle}>{inq.name}</td>
                  <td style={tdStyle}>{inq.phone}</td>
                  <td style={tdStyle}>{inq.email}</td>
                  <td style={tdStyle}>{inq.subject || '-'}</td>
                  <td style={tdStyle}>{inq.message || '-'}</td>
                  <td style={{ ...tdStyle, borderBottomRightRadius: 10, textAlign: 'right', paddingRight: '20px' }}>
                    {inq.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Placeholder */}
      <div style={{
        borderTop: "1px solid #ccc",
        padding: "10px 30px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        fontSize: "14px",
        color: "#666"
      }}>
        &lt; 1/10 &gt;
      </div>
    </div>
  );
}

// Styles
const thStyle = {
  padding: '12px',
  fontWeight: '600',
  fontSize: '14px',
  borderBottom: "1px solid #000000",
  borderTop: "1px solid #000000",
  whiteSpace: 'nowrap',
  backgroundColor: '#fff',
};

const tdStyle = {
  padding: '10px 12px',
  fontSize: '14px',
  verticalAlign: 'top',
  height: '56px',
  backgroundColor: '#FFFFFF',
  borderBottom: '1px solid #000000',
  textAlign: 'center', // Add this line to center-align
};


const switchWrapperStyle = {
  display: 'flex',
  gap: '6px',
  backgroundColor: '#E2E2E2',
  padding: '3px',
  borderRadius: '6px',
  width: 'fit-content',
  cursor: 'pointer',
};

const switchBtnStyle = {
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '13px',
  fontWeight: '500',
  transition: 'all 0.3s',
};
