

import React from 'react';

const Toast = ({ message, type = 'info', onClose }) => {
  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-content">
        <span style={{ color: '#1f2937', fontWeight: 500, fontSize: '14px', lineHeight: 1.4 }}>
          {message}
        </span>
      </div>
      <button
        className="toast-close"
        onClick={onClose}
        style={{ marginLeft: '16px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#9ca3af', padding: '4px', lineHeight: 1, flexShrink: 0 }}
        aria-label="Close notification"
      >
        &times;
      </button>
    </div>
  );
};

export default Toast;
