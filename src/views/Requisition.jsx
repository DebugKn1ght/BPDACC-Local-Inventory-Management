import React from 'react';

const Requisition = () => {
  return (
    <div className="requisition-page">
      <div className="placeholder-container">
        <div className="placeholder-content">
          <h1>Requisition & Issue Slip (RIS)</h1>
          <p>The updated Requisition UI is currently under construction.</p>
          <div className="placeholder-icon">🚧</div>
          <p className="placeholder-subtext">Check back soon for the new feature!</p>
        </div>
      </div>
      
      <style>{`
        .requisition-page {
          padding: 24px;
          height: calc(100vh - 48px);
        }
        .placeholder-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .placeholder-content {
          text-align: center;
          padding: 40px;
        }
        .placeholder-content h1 {
          color: #1e40af;
          margin-bottom: 16px;
        }
        .placeholder-content p {
          color: #4b5563;
          font-size: 16px;
          margin-bottom: 24px;
        }
        .placeholder-icon {
          font-size: 64px;
          margin-bottom: 24px;
          animation: bounce 2s infinite;
        }
        .placeholder-subtext {
          color: #9ca3af !important;
          font-size: 14px !important;
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-20px); }
          60% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default Requisition;
