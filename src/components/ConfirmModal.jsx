import React from 'react';

const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay" style={{ zIndex: 10001 }}>
      <div className="modal-content" style={{ maxWidth: '400px', animation: 'scaleUp 0.2s ease-out' }}>
        <div className="modal-header" style={{ borderBottom: 'none', paddingBottom: '0' }}>
          <h2>Confirm Action</h2>
        </div>
        <div className="modal-form" style={{ padding: '20px 24px' }}>
          <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.5' }}>
            {message}
          </p>
          <div className="modal-actions" style={{ marginTop: '24px', borderTop: 'none', paddingTop: '0' }}>
            <button className="btn-secondary" onClick={onCancel}>
              Cancel
            </button>
            <button className="btn-primary" style={{ background: '#ef4444' }} onClick={onConfirm}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
